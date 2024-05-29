import connectMongo from "@/backend/services/connectMongo";
import { productModel } from "@/backend/models/product-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

export const getAllProducts = async ({
  search = "",
  category = "",
  minPrice = "",
  maxPrice = "",
  ratings = "",
  sort = "",
  size = "",
}) => {
  try {
    await connectMongo();

    const query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { tags: { $regex: search, $options: "i" } },
        { sku: { $regex: search, $options: "i" } },
        { brand: { $regex: search, $options: "i" } },
      ];
    }

    if (category) {
      const categoryArray = decodeURIComponent(category).split("|");
      query.category = categoryArray;
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) {
        query.price.$gte = parseFloat(minPrice);
      }
      if (maxPrice) {
        query.price.$lte = parseFloat(maxPrice);
      }
    }

    if (ratings) {
      const ratingsArray = decodeURIComponent(ratings).split("|").map(Number);
      query.averageRating = { $in: ratingsArray };
    }

    if (size) {
      query.size = { $regex: size, $options: "i" };
    }

    let sortQuery = {};
    if (sort) {
      if (sort === "newest") {
        sortQuery = { createdAt: -1 };
      } else {
        const [field, order] = sort.split("-");
        sortQuery[field] = order === "desc" ? -1 : 1;
      }
    }
    console.log(sortQuery);

    // Execute the query
    const products = await productModel.find(query).sort(sortQuery).lean();

    return replaceMongoIdInArray(products) || null;
  } catch (err) {
    return null;
  }
};
