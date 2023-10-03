"use client";
import { scrapeAndStoreProduct } from "@/lib/actions";
import { BlobOptions } from "buffer";
import React, { FormEvent, useState } from "react";

const isValidAmazonProductUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.in") ||
      hostname.endsWith("amazon")
    ) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidLink = isValidAmazonProductUrl(searchPrompt);
    if (!isValidLink) return alert("Please provide a valid link");

    try {
      setIsLoading(true);
      const product = await scrapeAndStoreProduct(searchPrompt);
      console.log("product", product);
      // setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt === "" ? true : false}
      >
        {isLoading ? "Searching..." : " Search"}
      </button>
    </form>
  );
};

export default Searchbar;
