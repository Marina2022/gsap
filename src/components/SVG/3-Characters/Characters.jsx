import s from './Characters.module.scss';
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {Link} from "react-router-dom";

const Characters = () => {

    gsap.registerPlugin(GSDevTools)


    const lettersRef = useRef([])
    const textPathRef = useRef([])
    const rectRef = useRef([])
    const spiralRef = useRef([])
    const setRef = (el) => {
      lettersRef.current && !lettersRef.current.includes(el) && lettersRef.current.push(el)
    }

    useEffect(() => {

        // GSDevTools.create()


        gsap.to(textPathRef.current, {
          attr: {
            startOffset: 530
          }, duration: 2
        })

        const spiralLength = spiralRef.current.getTotalLength()

        gsap.set(spiralRef.current, {
          strokeDashoffset: spiralLength,
          strokeDasharray: spiralLength
        })

        gsap.to(spiralRef.current, {
          strokeDashoffset: 0, duration: 2
        })

        gsap.to(rectRef.current, {
          strokeDashoffset: -2000,
          duration: 4
        })


        gsap.timeline()
          .from(lettersRef.current, {opacity: 0, stagger: 0.05, duration: 0.1})
          .from(lettersRef.current, {
            scale: .5,
            stagger: 0.05,
            transformOrigin: "50% 50%",
            duration: 1.2,
            ease: "elastic"
          }, 0)


          // jump
          .set(lettersRef.current, {transformOrigin: "0 100%"})
          .to(lettersRef.current, {
              keyframes: {
                '20%': {scaleY: .2, y: 0},
                '50%': {scaleY: 1.5, y: -100, ease: 'sine.out'},
                '80%': {scaleY: 1, y: 0, ease: 'sine.in'},
                '82%': {scaleY: 0.5, y: 0, ease: 'sine.out'},
                '100%': {scaleY: 1, y: 0},
              },
              duration: 1, stagger: .02
            }
          )

          // skew

          .to(lettersRef.current, {skewX: 30, x: -20, duration: .2, ease: 'power1.inOut'})
          .to(lettersRef.current, {
            skewX: -30,
            x: 500,
            ease: 'power1.in',
            stagger: {each: .02, from: 'end'},
            duration: 0.25,
            scale: 1.5
          })

      }, []
    )

    return (
      <div className='container'>
        <Link to='/svg'>SVG-Home</Link>

        <div className={s.wrapper}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
            {/*<rect x="238" y="167" width="48" height="92" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);"></rect>*/}
            <rect className={s.rect} x="-1" y="-1" width="500" height="450"></rect>

            <g className={s.text}>

              <path ref={setRef}
                    d="M 71 229 L 57 229 L 57 208 Q 57 205 59 203 Q 61 201 65 201 Q 67 201 68 201 Q 70 201 71 201 Z M 64 232 L 64 221 L 89 221 Q 89 222 90 223 Q 90 224 90 226 Q 90 229 89 230 Q 87 232 85 232 Z M 65 212 L 65 201 L 91 201 Q 92 201 92 203 Q 93 204 93 206 Q 93 209 91 210 Q 90 212 88 212 Z M 57 226 L 71 226 L 71 249 Q 70 249 68 249 Q 67 250 65 250 Q 61 250 59 248 Q 57 247 57 243 Z"/>
              <path ref={setRef}
                    d="M 121 250 Q 114 250 109 248 Q 105 246 102 241 Q 99 237 99 231 L 99 226 L 113 226 L 113 231 Q 113 235 116 237 Q 118 239 121 239 Q 124 239 127 237 Q 129 235 129 231 L 129 226 L 143 226 L 143 231 Q 143 237 140 241 Q 137 246 133 248 Q 128 250 121 250 Z M 113 229 L 99 229 L 99 200 Q 100 200 102 200 Q 104 200 106 200 Q 110 200 112 201 Q 113 202 113 206 Z M 143 229 L 129 229 L 129 200 Q 130 200 131 200 Q 133 200 135 200 Q 139 200 141 201 Q 143 202 143 206 Z"/>
              <path ref={setRef}
                    d="M 153 217 L 166 217 Q 166 221 166 224 Q 166 227 166 230 Q 166 233 166 236 L 166 249 Q 165 249 164 249 Q 162 250 160 250 Q 156 250 154 248 Q 153 247 153 243 Z M 197 232 L 184 232 Q 183 227 183 222 Q 183 217 183 213 L 183 200 Q 184 200 186 200 Q 188 200 190 200 Q 194 200 195 201 Q 197 202 197 206 Z M 197 228 L 197 247 Q 196 248 193 249 Q 191 250 188 250 Q 185 250 183 249 Q 180 248 178 245 L 171 228 Q 170 227 169 225 Q 168 224 168 222 Q 167 221 166 219 L 153 222 L 153 203 Q 154 201 156 201 Q 159 200 161 200 Q 164 200 167 201 Q 170 202 171 205 L 179 221 Q 180 223 181 224 Q 181 226 182 227 Q 183 229 183 231 Z"/>
              <path ref={setRef}
                    d="M 238 239 Q 242 239 244 238 Q 245 237 245 235 Q 245 233 244 232 Q 243 231 240 231 L 237 230 Q 232 228 229 226 Q 225 224 223 221 Q 221 219 221 214 Q 221 207 226 203 Q 232 199 241 199 Q 246 199 249 200 Q 253 201 255 203 Q 257 204 257 207 Q 257 209 256 211 Q 255 212 254 213 Q 252 212 249 211 Q 246 210 243 210 Q 239 210 237 211 Q 236 212 236 214 Q 236 215 237 216 Q 238 217 240 217 L 244 219 Q 252 221 256 225 Q 260 229 260 235 Q 260 242 254 246 Q 249 250 238 250 Q 234 250 230 249 Q 226 248 223 246 Q 221 244 221 241 Q 221 239 222 237 Q 224 236 225 235 Q 228 237 231 238 Q 234 239 238 239 Z"/>
              <path ref={setRef}
                    d="M 276 212 L 276 201 L 302 201 Q 303 201 303 203 Q 304 204 304 206 Q 304 209 302 210 Q 301 212 299 212 Z M 290 201 L 290 212 L 264 212 Q 263 211 263 209 Q 262 208 262 206 Q 262 203 264 202 Q 265 201 267 201 Z M 276 210 L 290 210 L 290 249 Q 289 249 287 249 Q 285 250 283 250 Q 279 250 278 248 Q 276 247 276 243 Z"/>
              <path ref={setRef}
                    d="M 332 250 Q 325 250 320 248 Q 316 246 313 241 Q 310 237 310 231 L 310 226 L 324 226 L 324 231 Q 324 235 327 237 Q 329 239 332 239 Q 335 239 337 237 Q 340 235 340 231 L 340 226 L 354 226 L 354 231 Q 354 237 351 241 Q 348 246 344 248 Q 339 250 332 250 Z M 324 229 L 310 229 L 310 200 Q 311 200 313 200 Q 315 200 317 200 Q 321 200 323 201 Q 324 202 324 206 Z M 354 229 L 340 229 L 340 200 Q 341 200 342 200 Q 344 200 346 200 Q 350 200 352 201 Q 354 202 354 206 Z"/>
              <path ref={setRef}
                    d="M 378 229 L 364 229 L 364 208 Q 364 205 366 203 Q 368 201 371 201 Q 373 201 375 201 Q 377 201 378 201 Z M 371 232 L 371 221 L 395 221 Q 396 222 396 223 Q 397 224 397 226 Q 397 229 395 230 Q 394 232 392 232 Z M 371 212 L 371 201 L 398 201 Q 398 201 399 203 Q 399 204 399 206 Q 399 209 398 210 Q 397 212 394 212 Z M 364 226 L 378 226 L 378 249 Q 377 249 375 249 Q 373 250 371 250 Q 367 250 365 248 Q 364 247 364 243 Z"/>
              <path ref={setRef}
                    d="M 420 229 L 406 229 L 406 208 Q 406 205 408 203 Q 410 201 414 201 Q 416 201 417 201 Q 419 201 420 201 Z M 413 232 L 413 221 L 438 221 Q 438 222 439 223 Q 439 224 439 226 Q 439 229 438 230 Q 436 232 434 232 Z M 414 212 L 414 201 L 440 201 Q 441 201 441 203 Q 442 204 442 206 Q 442 209 440 210 Q 439 212 437 212 Z M 406 226 L 420 226 L 420 249 Q 419 249 417 249 Q 416 250 414 250 Q 410 250 408 248 Q 406 247 406 243 Z"/>
            </g>
          </svg>

          <div className={s.pathTextWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500"
                 className={s.pathTextSvt}>
              <text>
                <textPath startOffset="-373" ref={textPathRef} href="#text-path-0">Marina the Great</textPath>
              </text>
              <defs>
                <style>@import
                  url(https://fonts.googleapis.com/css2?family=Aoboshi+One%3Aital%2Cwght%400%2C400&amp;display=swap);
                </style>
                <path id="text-path-0" d="M 0 192 C 66 130 381 176 615 185"></path>
              </defs>
            </svg>
          </div>
        </div>


        <div className={s.experimentalWrapper}>
          <svg viewBox="0 0 300 300" className={s.svggg} height="400" width="500" preserveAspectRatio="xMinYminMeet">
            <circle r="150" fill="navy" cx="150" cy="150"/>
          </svg>
        </div>


        <div className={s.rectangle}>
          <svg viewBox="0 0 500 300" width="500" height="300">
            <rect ref={rectRef} x="100" y="50" width="300" height="200"/>
          </svg>
        </div>

        <div>

          <svg className={s.starSVG} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
            <path ref={spiralRef}
                  d="M 267 271 Q 267 267 270 265 Q 274 263 279 264 Q 284 266 287 271 Q 291 277 290 285 Q 290 293 284 300 Q 277 308 267 312 Q 256 315 243 312 Q 230 308 220 298 Q 210 287 206 271 Q 203 254 209 237 Q 215 219 230 207 Q 246 193 267 190 Q 289 186 311 195 Q 334 204 349 224 Q 365 244 368 271 Q 372 299 361 325 Q 349 352 324 370 Q 299 389 267 393 Q 234 396 203 382 Q 171 368 150 339 Q 129 308 125 271 Q 122 232 138 197 Q 156 160 189 137 Q 224 112 267 109 Q 311 105 351 125 Q 393 145 419 183 Q 446 223 449 271 Q 453 320 431 365 Q 408 412 365 441 Q 321 470 267 473 Q 212 477 162 452 Q 112 427 80 379 Q 48 330 44 271 Q 41 211 68 156 Q 96 101 149 66 Q 202 31 267 28 Q 264 28 267 28"
            ></path>
          </svg>
        </div>

      </div>


    );
  }
;

export default Characters;