"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables
const sendQuery = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    try {
        // Check if environment variables are properly set
        if (!process.env.BE_EMAIL || !process.env.BE_PASSWORD) {
            return response.status(500).json({ error: "Email credentials missing. Please check server logs." });
        }
        // Create transporter
        const transporter = nodemailer_1.default.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.BE_EMAIL,
                pass: process.env.BE_PASSWORD, // Ensure this is correct
            },
        });
        let mailOptions;
        if ((_a = request === null || request === void 0 ? void 0 : request.body) === null || _a === void 0 ? void 0 : _a.mobileNumber) {
            // Sending a query email
            mailOptions = {
                from: process.env.BE_EMAIL,
                to: process.env.BE_EMAIL, // Receiving email
                subject: "Query About Course",
                html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                  <h2 style="color:#a4204d;">You have a new query from the Learn-Tech website</h2>
              
                  <p style="font-size: 16px; color: #555;"><strong>Name :</strong> ${(_b = request === null || request === void 0 ? void 0 : request.body) === null || _b === void 0 ? void 0 : _b.name}</p>
                  <p style="font-size: 16px; color: #555;"><strong>Email ID :</strong> ${(_c = request.body) === null || _c === void 0 ? void 0 : _c.email}</p>
                  <p style="font-size: 16px; color: #555;"><strong>Mobile Number :</strong> ${(_d = request === null || request === void 0 ? void 0 : request.body) === null || _d === void 0 ? void 0 : _d.mobileNumber}</p>
                  <p style="font-size: 16px; color: #555;"><strong>Whatsapp Number :</strong> ${(_e = request === null || request === void 0 ? void 0 : request.body) === null || _e === void 0 ? void 0 : _e.whatsappNumber}</p>
                  <p style="font-size: 16px; color: #555;"><strong>Domain :</strong> ${((_f = request === null || request === void 0 ? void 0 : request.body) === null || _f === void 0 ? void 0 : _f.domain) || "<em>No Domain Mentioned</em>"}</p>
                  <p style="font-size: 16px; color: #555;"><strong>Query :</strong> ${((_g = request === null || request === void 0 ? void 0 : request.body) === null || _g === void 0 ? void 0 : _g.query) || "<em>No Query Provided</em>"}</p>
              
                  <hr style="border: 1px solid #ddd; margin: 20px 0;"/>
              
              
                </div>
              `
            };
        }
        else {
            mailOptions = {
                from: process.env.BE_EMAIL,
                to: process.env.BE_EMAIL, // Receiving email
                subject: "User Review",
                html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                  <h2 style="color:#a4204d;">You have a new review from the Learn-Tech website</h2>
              
                  <p style="font-size: 16px; color: #555;"><strong>Name :</strong> ${(_h = request === null || request === void 0 ? void 0 : request.body) === null || _h === void 0 ? void 0 : _h.name}</p>
                  <p style="font-size: 16px; color: #555;"><strong>Email ID :</strong> ${(_j = request.body) === null || _j === void 0 ? void 0 : _j.email}</p>
                  <p style="font-size: 16px; color: #555;"><strong>Review :</strong> ${((_k = request === null || request === void 0 ? void 0 : request.body) === null || _k === void 0 ? void 0 : _k.review) || "<em>No Review Provided</em>"}</p>
              
                  <hr style="border: 1px solid #ddd; margin: 20px 0;"/>
              
              
                </div>
              `
            };
        }
        yield transporter.sendMail(mailOptions);
        return response.status(200).json({ message: "Email sent successfully!" });
    }
    catch (error) {
        if (!response.headersSent) {
            return response.status(500).json({ error: "Failed to send email. Check server logs for details." });
        }
    }
});
exports.default = { sendQuery };
