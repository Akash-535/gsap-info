"use client";
import React, { useEffect, useState } from "react";
import Prism from "../../../utils/prisim";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import { FiCopy, FiCheck } from "react-icons/fi"; // Icons from react-icons

const CodeBlock = ({ code, language = "javascript", filename = "code.js" }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="bg-[#1e1e1e] rounded-md scroll-bar-mini shadow-md font-mono text-sm border border-[#333] text-start max-h-[600px] overflow-auto">
      {/* VS Code-style top bar */}
      <div className="bg-[#2d2d2d] px-4 py-2 border-b border-[#3c3c3c] flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-x-3">
          {" "}
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <span className="ml-4 text-gray-300 text-sm">{filename}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-sm text-white cursor-pointer hover:text-green-400 transition-all">
          {copied ? (
            <>
              <FiCheck className="text-green-400" />
              Copied!
            </>
          ) : (
            <>
              <FiCopy />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code block with Prism highlighting + line numbers */}
      <pre
        className={`language-${language} line-numbers p-4 overflow-x-auto text-[#d4d4d4]`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
