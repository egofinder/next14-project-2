"use server";

import { connectToDB } from "./utils";
import { Product, User } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  try {
    connectToDB();
    const newUser = await User.create({
      username,
      email,
      password: encryptedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  //TODO: Password Update 하는 부분 수정 필요, 지금은 updateFileds만 확인해서 해서 암호화가 안됨.
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  try {
    connectToDB();

    const updateFileds = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFileds).forEach(
      (key) =>
        (updateFileds[key] === "" || undefined) && delete updateFileds[key]
    );

    await User.findByIdAndUpdate(id, updateFileds);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const id = formData.get("id");

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  //TODO: 이미지와 카테고리 추가하는거 추가해야 함.
  try {
    connectToDB();
    const newProduct = await Product.create({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  //TODO: 이미지와 카테고리 수정하는거 추가해야 함.

  try {
    connectToDB();

    const updateFileds = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFileds).forEach(
      (key) =>
        (updateFileds[key] === "" || undefined) && delete updateFileds[key]
    );

    await Product.findByIdAndUpdate(id, updateFileds);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const id = formData.get("id");

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
