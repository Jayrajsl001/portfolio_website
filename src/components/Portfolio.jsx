import React, { useEffect, useState } from 'react';
// const BASE = import.meta.env.BASE_URL || '/'



export default function Portfolio() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-slate-900 dark:to-black text-gray-900 dark:text-gray-100 p-6">
      <header className="max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-transparent dark:border-gray-700">
        <div className="flex-shrink-0">
          <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-pink-500 via-indigo-500 to-cyan-400 flex items-center justify-center text-white text-3xl font-extrabold shadow-xl">JL</div>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Jayraj Lakkad</h1>
          <p className="mt-2 text-sm md:text-base text-gray-700 dark:text-gray-300">Final-year B.Tech CSE • Researcher in Speech Processing & Deep Learning • CPI: 9.10/10</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:jayrajlakkad85@gmail.com" className="text-sm px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/40">jayrajlakkad85@gmail.com</a>
            <a href="#" className="text-sm px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/40">LinkedIn</a>
            <a href="#" className="text-sm px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/40">GitHub</a>
            <a href="public/Jayraj_Resume_20251108.pdf" className="text-sm px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/40" download>Download Resume</a>
          </div>
        </div>

        <div className="w-full md:w-auto flex items-center justify-end gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-300 mr-4 text-right">
            <div>Surat, Gujarat, India</div>
            <div className="mt-1">+91-9081196686</div>
          </div>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-full bg-white/70 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 shadow-sm hover:scale-105 transition-transform"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 6.636L5.636 5.222m12.728 0L17.364 6.636M6.636 17.364l-1.414 1.414" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.752 15.002A9 9 0 1 1 12.998 2.248 7 7 0 0 0 21.752 15z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto mt-8 grid grid-cols-1 gap-8">
        {/* About */}
        <section className="bg-white/80 dark:bg-gray-800/60 rounded-2xl shadow p-6 md:p-8 border border-transparent dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-300">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Driven final-year B.Tech CSE student with hands-on research and engineering experience in speech processing and deep learning. Contributor to conference papers (APSIPA ASC 2025, PReMI 2025). Built systems for neural waveform synthesis, multilingual audio deepfake detection, and emotion suppression for ASR. Seeking research & R&amp;D roles in speech processing & privacy-preserving AI.</p>
        </section>

        {/* Skills + Areas */}
        <section className="bg-white/80 dark:bg-gray-800/60 rounded-2xl shadow p-6 md:p-8 flex flex-col md:flex-row gap-6 border border-transparent dark:border-gray-700">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-300">Technical Skills</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
              <li className="px-2 py-1 rounded-md bg-white/40 dark:bg-white/5">Python</li>
              <li className="px-2 py-1 rounded-md bg-white/40 dark:bg-white/5">C++</li>
              <li className="px-2 py-1 rounded-md bg-white/40 dark:bg-white/5">PyTorch</li>
              <li className="px-2 py-1 rounded-md bg-white/40 dark:bg-white/5">scikit-learn</li>
              <li className="px-2 py-1 rounded-md bg-white/40 dark:bg-white/5">Gradio</li>
              <li className="px-2 py-1 rounded-md bg-white/40 dark:bg-white/5">Git</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-3 text-cyan-600 dark:text-cyan-300">Areas of Interest</h3>
            <ul className="text-gray-700 dark:text-gray-300">
              <li>Machine Learning & Deep Learning</li>
              <li>Speech Processing & Neural Vocoders</li>
              <li>Emotion Recognition & Suppression</li>
              <li>Privacy-preserving ML & Federated Learning</li>
              <li>NLP & Large Language Models</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-white/80 dark:bg-gray-800/60 rounded-2xl shadow p-6 md:p-8 border border-transparent dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3 text-violet-600 dark:text-violet-300">Selected Projects</h2>

          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-gradient-to-r from-white/60 to-indigo-50 dark:from-transparent dark:to-gray-800/30 border border-transparent dark:border-gray-700">
              <h4 className="font-semibold">Multimodal Hate Speech Classification <span className="text-sm text-gray-500 dark:text-gray-400">(2025)</span></h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">Audio-first hate speech classifier using Whisper for transcription, BERT embeddings and a custom CNN. Deployed as a real-time demo with Gradio.</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Tech: Whisper, BERT, PyTorch, Gradio. <a href="#" className="underline">GitHub</a></p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-white/60 to-pink-50 dark:from-transparent dark:to-gray-800/30 border border-transparent dark:border-gray-700">
              <h4 className="font-semibold">Sentiment Recognition System using Sound Input <span className="text-sm text-gray-500 dark:text-gray-400">(2024)</span></h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">Emotion recognition on RAVDESS using Mel-spectrogram features with CNN and SVM classifiers. Achieved 84.6% (CNN) and 81.7% (SVM).</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Tech: Mel-spectrograms, CNN, scikit-learn. <a href="#" className="underline">GitHub</a></p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-white/60 to-cyan-50 dark:from-transparent dark:to-gray-800/30 border border-transparent dark:border-gray-700">
              <h4 className="font-semibold">Audio Deepfake & Emotion Suppression (Research)</h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">Contributed to multilingual audio deepfake detection (PReMI 2025) and an emotion suppression pipeline for ASR that reduced pitch variance by 82% and WER from 17.3% to 6.9% on RAVDESS.</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Tech: ResNet-18, EmoCycleGAN, WORLD vocoder. <a href="#" className="underline">Dataset & Code</a></p>
            </div>
          </div>
        </section>

        {/* Research & Experience */}
        <section className="bg-white/80 dark:bg-gray-800/60 rounded-2xl shadow p-6 md:p-8 border border-transparent dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3 text-emerald-600 dark:text-emerald-300">Research & Experience</h2>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h4 className="font-semibold">Speech Research Lab, DA-IICT — Research Intern <span className="text-sm text-gray-500 dark:text-gray-400">(Jun 2025 – Jul 2025)</span></h4>
              <ul className="list-disc ml-6 mt-2">
                <li>Worked on multilingual audio deepfake detection (PReMI 2025). Created VCTK-based dataset of interleaved real & synthetic English/Hindi speech using YourTTS and X-TTS.</li>
                <li>Developed emotion suppression pipeline for ASR (WORLD vocoder + EmoCycleGAN). Reduced pitch variance by 82% and WER from 17.3% to 6.9% via preprocessing & retraining.</li>
                <li>Implemented non-autoregressive transformers and VITS for high-fidelity waveform synthesis on LJ Speech (APSIPA ASC 2025 submission).</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Indian Institute of Technology, Patna — Research Intern <span className="text-sm text-gray-500 dark:text-gray-400">(Jun 2024 – Jul 2024)</span></h4>
              <p className="mt-2">Investigated federated learning for privacy-preserving ML using PySyft to simulate decentralized training and evaluated performance across heterogeneous datasets.</p>
            </div>

            <div>
              <h4 className="font-semibold">Campus Leadership Roles</h4>
              <p className="mt-2">Executive Central Councillor & Technical Coordinator, Eye Coders Club — led workshops and coordinated technical events (Jun 2023 – Jul 2024).</p>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="bg-white/80 dark:bg-gray-800/60 rounded-2xl shadow p-6 md:p-8 flex flex-col md:flex-row gap-6 border border-transparent dark:border-gray-700">
          <div className="flex-1 text-gray-700 dark:text-gray-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-600 dark:text-yellow-300">Education</h3>
            <p>B.Tech, Computer Science & Engineering — Charotar University of Science and Technology (2022 – 2026 expected) • CPI: 9.10/10</p>
            <p className="mt-2">Ashadeep Vidyalaya & Ucchtar Madhyamik Shala — Science Stream (Class 12: 91%, Class 10: 86.05%)</p>
          </div>

          <div className="flex-1 text-gray-700 dark:text-gray-300">
            <h3 className="text-xl font-semibold mb-3 text-amber-600 dark:text-amber-300">Certifications & Achievements</h3>
            <ul>
              <li>NPTEL: Data Structures & Algorithms, DBMS, Deep Learning (IIT Ropar)</li>
              <li>2nd place — ImmunoQuest Kaggle Competition</li>
              <li>Solved 600+ problems on LeetCode, 300+ on InterviewBit</li>
              <li>Recipient: Tuition Fee Waiver Scheme (TFWS)</li>
            </ul>
          </div>
        </section>

        {/* Testimonials (placeholder) */}
        <section className="bg-white/80 dark:bg-gray-800/60 rounded-2xl shadow p-6 md:p-8 border border-transparent dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3 text-rose-600 dark:text-rose-300">Testimonials</h2>
          <p className="text-gray-700 dark:text-gray-300">"Available on request" — add advisor / mentor quotes here if you have them.</p>
        </section>

        {/* Contact */}
        <section className="bg-white/80 dark:bg-gray-800/60 rounded-2xl shadow p-6 md:p-8 border border-transparent dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3 text-sky-600 dark:text-sky-300">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300">If you'd like to collaborate or discuss research opportunities, feel free to reach out:</p>
          <ul className="mt-3 text-gray-700 dark:text-gray-300">
            <li>Email: <a href="mailto:jayrajlakkad85@gmail.com" className="underline">jayrajlakkad85@gmail.com</a></li>
            <li>Phone: +91-9081196686</li>
            <li>Location: Surat, Gujarat, India</li>
          </ul>
        </section>

      </main>

      <footer className="max-w-5xl mx-auto mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">Built with ❤️ • Last updated Nov 2025</footer>
    </div>
  );
}
