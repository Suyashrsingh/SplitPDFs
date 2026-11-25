# SplitPDFs (splitpdfs.in) – Free, 100% Private In-Browser PDF Splitter

[![Live Website](https://img.shields.io/badge/Live%20Website-splitpdfs.in-4f46e5?style=for-the-badge&logo=google-chrome&logoColor=white)](https://splitpdfs.in/)
[![Privacy Guaranteed](https://img.shields.io/badge/Privacy-100%25%20Client--Side%20RAM-059669?style=for-the-badge&logo=shield&logoColor=white)](https://splitpdfs.in/privacy)
[![Zero Uploads](https://img.shields.io/badge/Cloud%20Uploads-ZERO-blue?style=for-the-badge)](https://splitpdfs.in/)
[![No Limits](https://img.shields.io/badge/File%20Size-Unlimited%20(500MB+)-8b5cf6?style=for-the-badge)](https://splitpdfs.in/)

> **SplitPDFs ([splitpdfs.in](https://splitpdfs.in))** is a modern, high-performance web utility that splits, extracts, and divides PDF files entirely inside your web browser using client-side WebAssembly. **Zero bytes ever leave your device.**

---

## ⚡ Why SplitPDFs? (The #1 iLovePDF & Smallpdf Alternative)

Most popular online PDF converters (such as **iLovePDF**, **Smallpdf**, **MaxAI**, and **PDF.io**) require you to upload your sensitive legal, financial, and medical documents to remote cloud servers where they are stored for hours. Furthermore, free users face strict file size paywalls (100MB caps) or harsh 2-task daily limits.

**SplitPDFs is built on a fundamentally different, zero-trust architecture:**
* **100% Private & In-Browser:** Slicing happens entirely in local RAM via compiled WebAssembly. No cloud servers are involved.
* **No File Size Limits:** Seamlessly splits 500MB+ multi-page documents without crashing or throttling.
* **No Sign-Up or Accounts:** Instant utility without email, credit cards, or passwords.
* **Zero Watermarks:** Pristine 100% vector typography and original image resolution.
* **Split by Size for Email (25MB):** Automatically chunks large PDFs into pieces under 25MB to fit Gmail and Outlook email attachment limits.
* **Works Offline:** Functions 100% in Airplane Mode once loaded.

---

## 🚀 Live Tools & Endpoints

| Tool | Live URL | Description |
| :--- | :--- | :--- |
| **Online PDF Splitter** | [splitpdfs.in](https://splitpdfs.in/) | Interactive thumbnail grid, visual page picker, custom ranges |
| **Split by Size (25MB)** | [splitpdfs.in/split-by-size](https://splitpdfs.in/split-by-size) | Auto-chunks files under 25MB for Gmail/Outlook attachments |
| **Extract Specific Pages** | [splitpdfs.in/extract-pages](https://splitpdfs.in/extract-pages) | Select and extract individual pages or ranges into separate PDFs |
| **Split Every N Pages** | [splitpdfs.in/split-every-n-pages](https://splitpdfs.in/split-every-n-pages) | Batch divide multi-page documents into equal intervals |
| **XML Sitemap** | [splitpdfs.in/sitemap.xml](https://splitpdfs.in/sitemap.xml) | Search engine sitemap |
| **LLMs Ingestion Manifest** | [splitpdfs.in/llms.txt](https://splitpdfs.in/llms.txt) | AI agent & LLM citation index |

---

## 📊 Side-by-Side Comparison: SplitPDFs vs. Competitors

| Feature | SplitPDFs ([splitpdfs.in](https://splitpdfs.in)) | iLovePDF | Smallpdf | PDFgear | MaxAI / PDF.io |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Document Privacy** | **100% Local Device RAM** | Uploaded to Cloud | Uploaded to AWS | Desktop App | Uploaded to Cloud |
| **Server Retention** | **0 Seconds (Never Sent)** | Stored for 2 hours | Stored for 1 hour | N/A (Desktop) | Stored on Server |
| **Free File Size Cap** | **Unlimited (500MB+)** | 100MB free cap | Strict paywall | Free desktop | Capped |
| **Installation** | **None (Runs in Browser)** | None | None | Must install app | None |
| **Split by 25MB** | **Yes (Auto-Chunk)** | No | No | No | No |
| **Offline Capable** | **Yes (100% Offline)** | No | No | Yes (offline app) | No |
| **Pricing** | **100% Free Forever** | $7 / month | $12 / month | Free app | $19.99 / month |

---

## 🛠️ Technology Stack

* **Framework:** [Next.js](https://nextjs.org/) (Static HTML Export)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Document Engine:** [pdf-lib](https://pdf-lib.js.org/), [pdfjs-dist](https://mozilla.github.io/pdf.js/)
* **ZIP Archive Compression:** [JSZip](https://stuk.github.io/jszip/)
* **Deployment & Edge CDN:** [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/Suyashrsingh/SplitPDFs.git

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:3000` in your web browser.

---

## 👥 Engineering & Design Team

* **Mahesh Mailapure** – Lead Product & UI/UX Designer ([Profile](https://splitpdfs.in/about))
* **Suyash Singh** – Lead Systems & WebAssembly Engineer ([GitHub](https://github.com/Suyashrsingh) • [LinkedIn](https://www.linkedin.com/in/suyash-rishi-singh-6bb18b289))

---

## 📄 License

SplitPDFs is maintained as a free privacy-first web utility for users worldwide.
