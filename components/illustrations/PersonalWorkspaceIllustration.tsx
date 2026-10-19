
"use client";

import { useState } from "react";
import {
  motion,
  useReducedMotion,
  useSpring,
} from "motion/react";

export function PersonalWorkspaceIllustration() {
  const reduceMotion = useReducedMotion();
  const [pointerInside, setPointerInside] = useState(false);

  const pointerX = useSpring(0, { stiffness: 65, damping: 22 });
  const pointerY = useSpring(0, { stiffness: 65, damping: 22 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(x * 9);
    pointerY.set(y * 6);
    setPointerInside(true);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
    setPointerInside(false);
  }

  return (
    <div
      role="img"
      aria-label="Storybook illustration of a student working at her laptop"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative mx-auto w-full max-w-[620px] select-none"
    >
      {/* Soft atmosphere behind the illustration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[8%] rounded-full
          bg-[#B9DDFB]/55 blur-[65px]
          dark:bg-[#244B83]/35 dark:blur-[80px]"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[14%] top-[14%]
          h-24 w-40 rounded-full bg-white/60 blur-3xl
          dark:bg-[#8DBDFF]/10"
        animate={
          reduceMotion
            ? {}
            : { x: [0, 14, -6, 0], y: [0, -5, 4, 0] }
        }
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.svg
        viewBox="0 0 640 560"
        className="relative z-10 h-auto w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        style={{
          x: pointerX,
          y: pointerY,
        }}
      >
        <defs>
          <linearGradient id="girl-hair" x1="245" y1="55" x2="405" y2="380">
            <stop stopColor="#293044" />
            <stop offset=".52" stopColor="#171D31" />
            <stop offset="1" stopColor="#101625" />
          </linearGradient>

          <linearGradient id="girl-skin" x1="285" y1="100" x2="360" y2="250">
            <stop stopColor="#FFE5D1" />
            <stop offset="1" stopColor="#EAB99C" />
          </linearGradient>

          <linearGradient id="girl-sweater" x1="230" y1="240" x2="420" y2="460">
            <stop stopColor="#D9E9FB" />
            <stop offset=".55" stopColor="#ABCDEC" />
            <stop offset="1" stopColor="#82B3E1" />
          </linearGradient>

          <linearGradient id="girl-laptop" x1="170" y1="340" x2="470" y2="435">
            <stop stopColor="#F8FBFF" />
            <stop offset="1" stopColor="#B5CCE4" />
          </linearGradient>

          <radialGradient id="girl-cheek">
            <stop stopColor="#E99593" stopOpacity=".42" />
            <stop offset="1" stopColor="#E99593" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="girl-screen" x1="205" y1="310" x2="425" y2="355">
            <stop stopColor="#EAF6FF" />
            <stop offset="1" stopColor="#D0E8FC" />
          </linearGradient>
        </defs>

        {/* Grounding shadow */}
        <ellipse
          cx="320"
          cy="505"
          rx="190"
          ry="19"
          fill="#6199D1"
          fillOpacity=".12"
          className="dark:fill-[#020817] dark:fill-opacity-50"
        />

        {/* Chair: understated, behind the character */}
        <path
          d="M220 330 Q220 260 275 245 Q320 230 365 245 Q420 260 420 330 L405 414 L235 414 Z"
          fill="#A9C2DE"
          fillOpacity=".48"
          className="dark:fill-[#203651] dark:fill-opacity-70"
        />
        <path
          d="M248 390 L242 470 M392 390 L398 470"
          stroke="#90ACC9"
          strokeWidth="9"
          strokeLinecap="round"
          className="dark:stroke-[#294563]"
        />

        {/* Back hair */}
        <motion.g
          animate={
            reduceMotion ? {} : { rotate: [0, 0.8, 0, -0.5, 0] }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "320px 175px" }}
        >
          <path
            d="M252 145 Q228 93 275 61 Q319 31 363 63 Q410 96 391 163
              L407 297 Q408 350 382 382 L356 365
              L365 206 L278 211 L284 367 L254 382
              Q228 348 234 292 Z"
            fill="url(#girl-hair)"
          />
          <path
            d="M255 175 Q240 239 256 319 Q263 348 277 361"
            stroke="#697895"
            strokeOpacity=".4"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M384 171 Q400 245 382 320 Q378 344 365 358"
            stroke="#697895"
            strokeOpacity=".3"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Oversized sweater */}
        <path
          d="M270 231 Q292 218 320 219 Q350 218 371 232
            Q410 250 429 297 L454 389
            Q455 405 436 412 Q382 430 320 427
            Q254 430 205 411 Q188 404 191 389
            L213 298 Q231 252 270 231 Z"
          fill="url(#girl-sweater)"
        />

        {/* Collar and soft fabric folds */}
        <path
          d="M291 227 Q300 252 320 253 Q340 252 350 227"
          stroke="#8BB4DB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M244 303 Q264 315 281 314 M359 314 Q382 315 397 301"
          stroke="#739EC8"
          strokeOpacity=".38"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M260 352 Q278 359 292 356 M348 356 Q364 359 380 352"
          stroke="#739EC8"
          strokeOpacity=".25"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Neck */}
        <path
          d="M297 197 L294 232 Q320 251 346 232 L343 197 Z"
          fill="url(#girl-skin)"
        />

        {/* Face */}
        <path
          d="M267 142 Q267 93 320 91 Q373 93 373 142
            L367 179 Q359 217 320 226
            Q281 217 273 179 Z"
          fill="url(#girl-skin)"
        />

        {/* Ears */}
        <ellipse cx="269" cy="158" rx="8" ry="13" fill="#EAB99C" />
        <ellipse cx="371" cy="158" rx="8" ry="13" fill="#EAB99C" />

        {/* Cheeks */}
        <ellipse cx="287" cy="171" rx="17" ry="11" fill="url(#girl-cheek)" />
        <ellipse cx="353" cy="171" rx="17" ry="11" fill="url(#girl-cheek)" />

        {/* Brows */}
        <path
          d="M283 133 Q296 126 307 133 M333 133 Q345 126 358 133"
          stroke="#48352F"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Eyes and a gentle blink */}
        <g>
          <path d="M282 145 Q295 155 308 145" stroke="#48352F" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M332 145 Q345 155 358 145" stroke="#48352F" strokeWidth="2.4" strokeLinecap="round" />
          <motion.g
            animate={reduceMotion ? {} : { scaleY: [1, 1, 0.08, 1, 1] }}
            transition={{
              duration: 5.5,
              times: [0, 0.78, 0.82, 0.86, 1],
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "320px 147px" }}
          >
            <ellipse cx="295" cy="146" rx="5.5" ry="7" fill="#382820" />
            <ellipse cx="345" cy="146" rx="5.5" ry="7" fill="#382820" />
            <circle cx="297" cy="144" r="1.8" fill="white" />
            <circle cx="347" cy="144" r="1.8" fill="white" />
          </motion.g>
        </g>

        {/* Nose and smile */}
        <path
          d="M316 158 Q319 164 324 161"
          stroke="#C98F78"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M304 180 Q320 192 336 180"
          stroke="#B96F71"
          strokeWidth="2.3"
          strokeLinecap="round"
        />

        {/* Front hair and fringe */}
        <path
          d="M268 143 Q247 112 266 82 Q288 48 322 54
            Q363 53 380 89 Q392 119 372 151
            Q366 119 348 105 Q330 93 311 100
            Q289 105 276 128 Z"
          fill="url(#girl-hair)"
        />
        <path
          d="M277 112 Q290 72 322 66"
          stroke="#75829B"
          strokeOpacity=".38"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M309 99 Q319 118 314 133"
          stroke="#242C41"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M341 99 Q354 116 356 131"
          stroke="#242C41"
          strokeWidth="9"
          strokeLinecap="round"
        />

        {/* Small blue hair clip */}
        <g transform="rotate(-17 359 83)">
          <rect x="349" y="78" width="22" height="9" rx="4.5" fill="#90CAF9" />
          <path d="M354 82 H366" stroke="#EAF6FF" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Laptop screen */}
        <path
          d="M192 342 L208 299 Q211 293 219 293 H421
            Q429 293 432 301 L448 342 Z"
          fill="#83A9D0"
          className="dark:fill-[#375778]"
        />
        <rect x="218" y="302" width="202" height="36" rx="3" fill="url(#girl-screen)" />

        {/* Tiny code-like marks on the display */}
        <g opacity=".8">
          <rect x="229" y="309" width="43" height="3" rx="1.5" fill="#5D9BCE" />
          <rect x="277" y="309" width="29" height="3" rx="1.5" fill="#A0C9EA" />
          <rect x="229" y="317" width="28" height="3" rx="1.5" fill="#8BBCE4" />
          <rect x="262" y="317" width="54" height="3" rx="1.5" fill="#5D9BCE" />
          <rect x="229" y="325" width="67" height="3" rx="1.5" fill="#8BBCE4" />
          <rect x="301" y="325" width="34" height="3" rx="1.5" fill="#5D9BCE" />
        </g>

        {/* Laptop base */}
        <path
          d="M184 342 H456 L471 365 Q473 371 465 372 H175
            Q167 371 170 365 Z"
          fill="url(#girl-laptop)"
          stroke="#9DB9D7"
          strokeWidth="1.2"
        />
        <path
          d="M289 349 H351 Q354 349 354 352 V357 H286 V352 Q286 349 289 349 Z"
          fill="#B1C9E1"
        />

        {/* Arms and sleeves rest naturally near the keyboard */}
        <path
          d="M221 282 Q202 297 208 323 L228 353
            Q237 362 249 352 L263 337 L249 316 L252 291 Z"
          fill="url(#girl-sweater)"
        />
        <path
          d="M419 282 Q438 297 432 323 L412 353
            Q403 362 391 352 L377 337 L391 316 L388 291 Z"
          fill="url(#girl-sweater)"
        />

        {/* Wrists */}
        <path
          d="M229 340 Q237 334 247 343 L261 355 Q264 361 257 364
            Q249 367 240 361 L227 352 Z"
          fill="url(#girl-skin)"
        />
        <path
          d="M411 340 Q403 334 393 343 L379 355 Q376 361 383 364
            Q391 367 400 361 L413 352 Z"
          fill="url(#girl-skin)"
        />

        {/* Hands: slow, small typing motion */}
        <motion.g
          animate={reduceMotion ? {} : { y: [0, -1.4, 0, -0.7, 0] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M244 351 Q251 347 258 353 L273 361
              Q278 365 274 369 Q271 372 265 369 L251 363
              Q243 365 238 360 Q235 356 244 351 Z"
            fill="url(#girl-skin)"
          />
          <path
            d="M396 351 Q389 347 382 353 L367 361
              Q362 365 366 369 Q369 372 375 369 L389 363
              Q397 365 402 360 Q405 356 396 351 Z"
            fill="url(#girl-skin)"
          />
        </motion.g>

        {/* Ambient details: restrained, not a field of random sparkles */}
        <motion.circle
          cx="164"
          cy="224"
          r="3"
          fill="#7DBAF0"
          animate={
            reduceMotion
              ? {}
              : { opacity: [0.25, 0.7, 0.25], y: [0, -5, 0] }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="475"
          cy="206"
          r="2.5"
          fill="#7DBAF0"
          animate={
            reduceMotion
              ? {}
              : { opacity: [0.2, 0.65, 0.2], y: [0, -7, 0] }
          }
          transition={{
            duration: 7,
            delay: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Tiny glint beside the laptop */}
        <path
          d="M472 285 L475 292 L482 295 L475 298 L472 305 L469 298 L462 295 L469 292 Z"
          fill="#90CAF9"
          fillOpacity=".6"
        />
      </motion.svg>

      {/* A soft pool of light beneath the laptop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[16%] left-1/2
          h-8 w-[46%] -translate-x-1/2 rounded-full
          bg-[#60A5FA]/20 blur-2xl
          dark:bg-[#38BDF8]/20"
      />

      {/* Keep a subtle response to pointer movement */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[9%] top-[16%]
          h-2 w-2 rounded-full bg-[#90CAF9]"
        animate={
          reduceMotion
            ? { opacity: 0.45 }
            : { opacity: pointerInside ? 0.8 : 0.3, scale: pointerInside ? 1.15 : 1 }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}
