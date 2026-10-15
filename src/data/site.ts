// Point this at wherever the CV lives. A file in public/cv/ works as-is;
// a full URL (Google Drive, Dropbox, ...) works too — just paste it here.
export const CV_URL = `${import.meta.env.BASE_URL}cv/Mohammad_Ishaqat_CV.pdf`;

export const CEFR = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

// `cefr` is how many of the six CEFR levels are reached (6 = C2 / native).
export const languages = [
  { name: "Arabic", level: "Native", detail: "Mother tongue", cefr: 6 },
  { name: "English", level: "C2", detail: "Full professional proficiency", cefr: 6 },
  { name: "German", level: "B1", detail: "Studied and worked in Germany, 2022 – 2025", cefr: 3 },
];
