export const PUBLIC_IMAGES = {
    avatarPlaceholder: "https://pixelerateai.s3.eu-west-1.amazonaws.com/public-images/avatar_placeholder.jpeg",
    generated1: "https://pixelerateai.s3.eu-west-1.amazonaws.com/public-images/generated1.jpg",
    generated2: "https://pixelerateai.s3.eu-west-1.amazonaws.com/public-images/generated2.jpg",
    generated3: "https://pixelerateai.s3.eu-west-1.amazonaws.com/public-images/generated3.jpg",
    generated4: "https://pixelerateai.s3.eu-west-1.amazonaws.com/public-images/generated4.jpg",
    generated5: "https://pixelerateai.s3.eu-west-1.amazonaws.com/public-images/generated5.jpg",
    sdxlCover: "https://pixelerateai.s3.eu-west-1.amazonaws.com/public-images/sdxl_cover.jpg",
    vanGoghDiffusionCover: "https://pixelerateai.s3.eu-west-1.amazonaws.com/public-images/van_gogh_d_cover.jpeg",
    sdxlTngInteriorCover: "https://pixelerateai.s3.eu-west-1.amazonaws.com/public-images/tng_interior_cover.jpeg",
};

export const DEFAULT_MODELS = [
    {
        name: "Sdxl tng interior - fofr",
        coverImage: PUBLIC_IMAGES.sdxlTngInteriorCover,
        version: "stability-ai/sdxl:da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",
        createdAt: new Date("08/02/2023"),
    },
    {
        name: "Stable diffusion XL",
        coverImage: PUBLIC_IMAGES.sdxlCover,
        version: "stability-ai/sdxl:da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",
        createdAt: new Date("08/02/2023"),
    },
    {
        name: "Van Gogh Diffusion - cjwbw",
        coverImage: PUBLIC_IMAGES.vanGoghDiffusionCover,
        version: "fofr/sdxl-tng-interior:45f1d0cf3445f54d4b19a2a03e53b15abd7237ea72e2fb4824b193ffa429e31f",
        createdAt: new Date("08/28/2023"),
    },
];
