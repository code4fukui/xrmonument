# xrmonument

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A collection of 3D scanned monuments and public art, primarily from Fukui, Japan, optimized for Augmented Reality (AR) and Virtual Reality (VR). Each monument is available as a `.usdz` file for AR on iOS devices and a `.glb` file for web and other 3D applications.

[https://code4fukui.github.io/xrmonument/](https://code4fukui.github.io/xrmonument/)

## View the Collection

Explore the full gallery of monuments on our demo page. From the gallery, you can:
- Launch a web-based VR viewer for any model (`APP` link).
- View models in AR on iOS devices using the `.usdz` link.
- Download the `.glb` or `.usdz` files directly.

## How to Add a Monument

You can contribute new monuments to the collection by following these steps:

1.  **Add 3D Models**: Place your `.usdz` and `.glb` model files in the root of the repository. The files should share the same base name (e.g., `mymonument.usdz` and `mymonument.glb`).

2.  **Update the Index**: Add a new row to `index.csv` with the details for your monument. The file requires the following columns:
    - `file`: The base name of your model files (without the extension).
    - `name`: The display name of the monument.
    - `date`: The date the model was added (YYYY-MM-DD).
    - `url`: A link to a webpage with more information about the real-world monument.
    - `site`: The name of the website for the link above.
    - `category_ja`, `category`: The collection's title in Japanese and English.
    - `x`, `y`, `z`, `scale`: (Optional) Initial position and scale for the web viewer.

3.  **Build the Website**: Run the build script to regenerate the `index.html` gallery and individual model pages. You will need [Deno](https://deno.land/) installed.
    ```sh
    deno run -A make.js
    ```
