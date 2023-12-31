class toolBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

      <!-- Colors -->
      <div class="option colors-rollout hide">
          Colors
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M0 6.5H13" stroke="var(--static2)" stroke-width="1.2"/>
              <path d="M6.5 0L6.5 13" stroke="var(--static2)" stroke-width="1.2"/>
          </svg>
          <span class="tooltip">Color Setup</span>
      </div>

      

      <div class="color-tools-span">

          <div class="option colors-option prim" id="prim-cont" tabindex="0">
              <input type="text" id="prim" name="prim" class="colorpicker" value="#000000">
              <!-- <input type="text" class="hex-input" value="#000000"> -->
              <label class="color-label" for="prim">Text</label>
              <div class="color-settings prim-settings">
                  <div class="sat-lightness-picker" draggable="false">
                  <div class="sl-handle" draggable="false"></div>
                  <div class="white-overlay"></div>
                  <div class="black-overlay"></div>
                      <div class="color-underlay"></div>
                  </div>
                  <div class="hue-picker">
                      <input class="hue-rotation" min="0" max="360" value="180" type="range">
                  </div>
                  <div class="color-output">
                      <div class="selected-color"></div>
                      <input type="text" class="hex-input prim-hex-input" value="#000000" maxlength="7">
                      <div class="copy-icon">
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="0.581151" y="0.581151" width="24.4083" height="24.4083" rx="3.84742" stroke="black" stroke-width="0.7" style="opacity: 0.2"/>
                              <rect x="9.87119" y="9.05613" width="9.32564" height="11.0381" rx="1.41885" stroke="black" stroke-width="0.7"/>
                              <path d="M15.7695 7.54181V7.17542C15.7695 6.34699 15.0979 5.67542 14.2695 5.67542H8.01318C7.18476 5.67542 6.51318 6.34699 6.51318 7.17542V15.3738C6.51318 16.2022 7.18476 16.8738 8.01318 16.8738H8.36445" stroke="black" stroke-width="0.7"/>
                          </svg>                                                                              
                      </div>
                  </div>
              </div>
              <div class="lock-button" id="text-lock">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="lock-closed">
                      <rect x="3.34869" y="6.14874" width="9.50262" height="9.50262" rx="2.30845" stroke="currentColor" stroke-width="0.697381"/>
                      <path d="M11.0518 4.3V6.052H5.1478V4.3C5.1478 2.66966 6.46946 1.348 8.0998 1.348C9.73015 1.348 11.0518 2.66966 11.0518 4.3Z" stroke="currentColor" stroke-width="0.696"/>
                      <circle cx="8.09971" cy="10.9" r="0.9" fill="currentColor"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="lock-open show">
                      <rect x="3.34869" y="6.14874" width="9.50262" height="9.50262" rx="2.30845" stroke="currentColor" stroke-width="0.697381"/>
                      <path d="M7.5 1H8.0998V1C9.92234 1 11.3998 2.47746 11.3998 4.3V6.4H4.7998" stroke="currentColor" stroke-width="0.696"/>
                      <circle cx="8.09971" cy="10.9" r="0.9" fill="currentColor"/>
                  </svg>
              </div>
              <a href="/docs/contrast-checker" class="contrast-link"><div class="contrast-light prim-contrast"><span class="contrast-tooltip">Contrast</span></div></a>
          </div>

          <div class="option colors-option sec" id="sec-cont" tabindex="0">
              <input type="text" id="sec" name="sec" class="colorpicker" value="#ffffff">
              <!-- <input type="text" class="hex-input" value="#ffffff"> -->
              <label class="color-label" for="sec">Background</label>
              <div class="color-settings sec-settings">
                  <div class="sat-lightness-picker" draggable="false">
                  <div class="sl-handle" draggable="false"></div>
                  <div class="white-overlay"></div>
                  <div class="black-overlay"></div>
                      <div class="color-underlay"></div>
                  </div>
                  <div class="hue-picker">
                      <input class="hue-rotation" min="0" max="360" value="180" type="range">
                  </div>
                  <div class="color-output">
                      <div class="selected-color"></div>
                      <input type="text" class="hex-input sec-hex-input" value="#ffffff" maxlength="7">
                      <div class="copy-icon">
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="0.581151" y="0.581151" width="24.4083" height="24.4083" rx="3.84742" stroke="black" stroke-width="0.7" style="opacity: 0.2"/>
                              <rect x="9.87119" y="9.05613" width="9.32564" height="11.0381" rx="1.41885" stroke="black" stroke-width="0.7"/>
                              <path d="M15.7695 7.54181V7.17542C15.7695 6.34699 15.0979 5.67542 14.2695 5.67542H8.01318C7.18476 5.67542 6.51318 6.34699 6.51318 7.17542V15.3738C6.51318 16.2022 7.18476 16.8738 8.01318 16.8738H8.36445" stroke="black" stroke-width="0.7"/>
                          </svg>                                                                              
                      </div>
                  </div>
              </div>
              <div class="lock-button" id="bg-lock">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="lock-closed">
                      <rect x="3.34869" y="6.14874" width="9.50262" height="9.50262" rx="2.30845" stroke="currentColor" stroke-width="0.697381"/>
                      <path d="M11.0518 4.3V6.052H5.1478V4.3C5.1478 2.66966 6.46946 1.348 8.0998 1.348C9.73015 1.348 11.0518 2.66966 11.0518 4.3Z" stroke="currentColor" stroke-width="0.696"/>
                      <circle cx="8.09971" cy="10.9" r="0.9" fill="currentColor"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="lock-open show">
                      <rect x="3.34869" y="6.14874" width="9.50262" height="9.50262" rx="2.30845" stroke="currentColor" stroke-width="0.697381"/>
                      <path d="M7.5 1H8.0998V1C9.92234 1 11.3998 2.47746 11.3998 4.3V6.4H4.7998" stroke="currentColor" stroke-width="0.696"/>
                      <circle cx="8.09971" cy="10.9" r="0.9" fill="currentColor"/>
                  </svg>
              </div>
              <a href="/docs/contrast-checker" target="_blank" class="contrast-link"><div class="contrast-light sec-contrast"><span class="contrast-tooltip">Contrast</span></div></a>
          </div>

          <div class="option colors-option primbuttn" id="primbuttn-cont" tabindex="0">
              <input type="text" id="primbuttn" name="primbuttn" class="colorpicker" value="#8fb4ff">
              <!-- <input type="text" class="hex-input" value="#8fb4ff"> -->
              <label class="color-label" for="primbuttn">Primary</label>
              <div class="color-settings primbuttn-settings">
                  <div class="sat-lightness-picker" draggable="false">
                  <div class="sl-handle" draggable="false"></div>
                  <div class="white-overlay"></div>
                  <div class="black-overlay"></div>
                      <div class="color-underlay"></div>
                  </div>
                  <div class="hue-picker">
                      <input class="hue-rotation" min="0" max="360" value="180" type="range">
                  </div>
                  <div class="color-output">
                      <div class="selected-color"></div>
                      <input type="text" class="hex-input primbuttn-hex-input" value="#8fb4ff" maxlength="7">
                      <div class="copy-icon">
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="0.581151" y="0.581151" width="24.4083" height="24.4083" rx="3.84742" stroke="black" stroke-width="0.7" style="opacity: 0.2"/>
                              <rect x="9.87119" y="9.05613" width="9.32564" height="11.0381" rx="1.41885" stroke="black" stroke-width="0.7"/>
                              <path d="M15.7695 7.54181V7.17542C15.7695 6.34699 15.0979 5.67542 14.2695 5.67542H8.01318C7.18476 5.67542 6.51318 6.34699 6.51318 7.17542V15.3738C6.51318 16.2022 7.18476 16.8738 8.01318 16.8738H8.36445" stroke="black" stroke-width="0.7"/>
                          </svg>                                                                              
                      </div>
                  </div>
              </div>
              <div class="lock-button" id="primbuttn-lock">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="lock-closed">
                      <rect x="3.34869" y="6.14874" width="9.50262" height="9.50262" rx="2.30845" stroke="currentColor" stroke-width="0.697381"/>
                      <path d="M11.0518 4.3V6.052H5.1478V4.3C5.1478 2.66966 6.46946 1.348 8.0998 1.348C9.73015 1.348 11.0518 2.66966 11.0518 4.3Z" stroke="currentColor" stroke-width="0.696"/>
                      <circle cx="8.09971" cy="10.9" r="0.9" fill="currentColor"/>
                  </svg> 
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="lock-open show">
                      <rect x="3.34869" y="6.14874" width="9.50262" height="9.50262" rx="2.30845" stroke="currentColor" stroke-width="0.697381"/>
                      <path d="M7.5 1H8.0998V1C9.92234 1 11.3998 2.47746 11.3998 4.3V6.4H4.7998" stroke="currentColor" stroke-width="0.696"/>
                      <circle cx="8.09971" cy="10.9" r="0.9" fill="currentColor"/>
                  </svg>
              </div>
              <a href="/docs/contrast-checker" class="contrast-link"><div class="contrast-light primbuttn-contrast"><span class="contrast-tooltip">Contrast</span></div></a>
          </div>

          <div class="option colors-option secbuttn" id="secbuttn-cont" tabindex="0">
              <input type="text" id="secbuttn" name="secbuttn" class="colorpicker" value="#ebf1ff">
              <!-- <input type="text" class="hex-input" value="#ebf1ff"> -->
              <label class="color-label" for="secbuttn">Secondary</label>
              <div class="color-settings secbuttn-settings">
                  <div class="sat-lightness-picker" draggable="false">
                  <div class="sl-handle" draggable="false"></div>
                  <div class="white-overlay"></div>
                  <div class="black-overlay"></div>
                      <div class="color-underlay"></div>
                  </div>
                  <div class="hue-picker">
                      <input class="hue-rotation" min="0" max="360" value="180" type="range">
                  </div>
                  <div class="color-output">
                      <div class="selected-color"></div>
                      <input type="text" class="hex-input secbuttn-hex-input" value="#ebf1ff" maxlength="7">
                      <div class="copy-icon">
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="0.581151" y="0.581151" width="24.4083" height="24.4083" rx="3.84742" stroke="black" stroke-width="0.7" style="opacity: 0.2"/>
                              <rect x="9.87119" y="9.05613" width="9.32564" height="11.0381" rx="1.41885" stroke="black" stroke-width="0.7"/>
                              <path d="M15.7695 7.54181V7.17542C15.7695 6.34699 15.0979 5.67542 14.2695 5.67542H8.01318C7.18476 5.67542 6.51318 6.34699 6.51318 7.17542V15.3738C6.51318 16.2022 7.18476 16.8738 8.01318 16.8738H8.36445" stroke="black" stroke-width="0.7"/>
                          </svg>                                                                              
                      </div>
                  </div>
              </div>
              <div class="lock-button" id="secbuttn-lock">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="lock-closed">
                      <rect x="3.34869" y="6.14874" width="9.50262" height="9.50262" rx="2.30845" stroke="currentColor" stroke-width="0.697381"/>
                      <path d="M11.0518 4.3V6.052H5.1478V4.3C5.1478 2.66966 6.46946 1.348 8.0998 1.348C9.73015 1.348 11.0518 2.66966 11.0518 4.3Z" stroke="currentColor" stroke-width="0.696"/>
                      <circle cx="8.09971" cy="10.9" r="0.9" fill="currentColor"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="lock-open show">
                      <rect x="3.34869" y="6.14874" width="9.50262" height="9.50262" rx="2.30845" stroke="currentColor" stroke-width="0.697381"/>
                      <path d="M7.5 1H8.0998V1C9.92234 1 11.3998 2.47746 11.3998 4.3V6.4H4.7998" stroke="currentColor" stroke-width="0.696"/>
                      <circle cx="8.09971" cy="10.9" r="0.9" fill="currentColor"/>
                  </svg>
              </div>
              <a href="/docs/contrast-checker" class="contrast-link"><div class="contrast-light secbuttn-contrast"><span class="contrast-tooltip">Contrast</span></div></a>
          </div>

          <div class="option colors-option accent" id="accent-cont" tabindex="0">
              <input type="text" id="accent" name="accent" class="colorpicker" value="#d41e6d">
              <!-- <input type="text" class="hex-input" value="#ff8f94"> -->
              <label class="color-label" for="accent">Accent</label>
              <div class="color-settings accent-settings">
                  <div class="sat-lightness-picker" draggable="false">
                  <div class="sl-handle" draggable="false"></div>
                  <div class="white-overlay"></div>
                  <div class="black-overlay"></div>
                      <div class="color-underlay"></div>
                  </div>
                  <div class="hue-picker">
                      <input class="hue-rotation" min="0" max="360" value="180" type="range">
                  </div>
                  <div class="color-output">
                      <div class="selected-color"></div>
                      <input type="text" class="hex-input accent-hex-input" value="#d41e6d" maxlength="7">
                      <div class="copy-icon">
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="0.581151" y="0.581151" width="24.4083" height="24.4083" rx="3.84742" stroke="black" stroke-width="0.7" style="opacity: 0.2"/>
                              <rect x="9.87119" y="9.05613" width="9.32564" height="11.0381" rx="1.41885" stroke="black" stroke-width="0.7"/>
                              <path d="M15.7695 7.54181V7.17542C15.7695 6.34699 15.0979 5.67542 14.2695 5.67542H8.01318C7.18476 5.67542 6.51318 6.34699 6.51318 7.17542V15.3738C6.51318 16.2022 7.18476 16.8738 8.01318 16.8738H8.36445" stroke="black" stroke-width="0.7"/>
                          </svg>                                                                              
                      </div>
                  </div>
              </div>
              <div class="lock-button" id="accent-lock">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="lock-closed">
                      <rect x="3.34869" y="6.14874" width="9.50262" height="9.50262" rx="2.30845" stroke="currentColor" stroke-width="0.697381"/>
                      <path d="M11.0518 4.3V6.052H5.1478V4.3C5.1478 2.66966 6.46946 1.348 8.0998 1.348C9.73015 1.348 11.0518 2.66966 11.0518 4.3Z" stroke="currentColor" stroke-width="0.696"/>
                      <circle cx="8.09971" cy="10.9" r="0.9" fill="currentColor"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="lock-open show">
                      <rect x="3.34869" y="6.14874" width="9.50262" height="9.50262" rx="2.30845" stroke="currentColor" stroke-width="0.697381"/>
                      <path d="M7.5 1H8.0998V1C9.92234 1 11.3998 2.47746 11.3998 4.3V6.4H4.7998" stroke="currentColor" stroke-width="0.696"/>
                      <circle cx="8.09971" cy="10.9" r="0.9" fill="currentColor"/>
                  </svg>
              </div>
              <a href="/docs/contrast-checker" class="contrast-link"><div class="contrast-light accent-contrast"><span class="contrast-tooltip">Contrast</span></div></a>
          </div>


          <div class="option colors-option theme" id="theme" tabindex="0">
            <div class="darkorlight-cont">
                <div class="darkorlight-wrapper">
                    
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_415_3003)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6431 8.13281C18.1998 7.99524 17.946 8.59577 18.2742 8.92401V8.92401C21.4878 12.1376 21.4878 17.3479 18.2742 20.5615C16.024 22.8117 12.7948 23.4863 9.95756 22.5852C9.67267 22.4947 9.42319 22.8301 9.63455 23.0415V23.0415C13.1374 26.5443 18.8167 26.5443 22.3195 23.0415C25.8224 19.5386 25.8224 13.8593 22.3195 10.3565C21.2545 9.29143 19.9882 8.5502 18.6431 8.13281Z" fill="white"/>
                    <path opacity="0.5" d="M8.38219 3.2998C8.62112 2.40071 9.8971 2.40071 10.136 3.29981L10.5752 4.95242C10.6439 5.21072 10.8229 5.42562 11.0645 5.53979L12.9668 6.43848C13.6598 6.7659 13.6598 7.75189 12.9668 8.0793L11.0645 8.978C10.8229 9.09216 10.6439 9.30706 10.5752 9.56536L10.136 11.218C9.8971 12.1171 8.62112 12.1171 8.38219 11.218L7.943 9.56536C7.87436 9.30706 7.69533 9.09216 7.45368 8.978L5.55146 8.0793C4.85844 7.75189 4.85844 6.7659 5.55146 6.43848L7.45368 5.53979C7.69533 5.42562 7.87436 5.21072 7.943 4.95242L8.38219 3.2998Z" fill="white"/>
                    <path opacity="0.3" d="M4.41646 16.2487C4.63581 15.4866 5.71573 15.4866 5.93507 16.2487V16.2487C5.99767 16.4662 6.15054 16.6464 6.35492 16.7436L6.62931 16.8742C7.31937 17.2025 7.31937 18.1846 6.62931 18.5129L6.35492 18.6434C6.15054 18.7407 5.99767 18.9209 5.93507 19.1384V19.1384C5.71573 19.9005 4.63581 19.9005 4.41646 19.1384V19.1384C4.35386 18.9209 4.20099 18.7407 3.99661 18.6434L3.72222 18.5129C3.03216 18.1846 3.03216 17.2025 3.72222 16.8742L3.99661 16.7436C4.20099 16.6464 4.35386 16.4662 4.41646 16.2487V16.2487Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_415_3003">
                    <rect width="29" height="29" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.65647 6.61473C7.17328 6.09921 7.1736 5.26212 6.65717 4.74621L6.15486 4.24442C5.63882 3.7289 4.80235 3.73006 4.28774 4.24702V4.24702C3.77544 4.76166 3.77544 5.59359 4.28774 6.10823L4.78865 6.61143C5.30337 7.1285 6.13993 7.12998 6.65647 6.61473V6.61473ZM3.95455 14.5C3.95455 13.7687 3.36168 13.1758 2.63034 13.1758H1.3242C0.592865 13.1758 0 13.7687 0 14.5V14.5C0 15.2313 0.592865 15.8242 1.3242 15.8242H2.63034C3.36168 15.8242 3.95455 15.2313 3.95455 14.5V14.5ZM15.8182 1.31818C15.8182 0.590169 15.228 0 14.5 0V0C13.772 0 13.1818 0.59017 13.1818 1.31818V2.58821C13.1818 3.31622 13.772 3.90639 14.5 3.90639V3.90639C15.228 3.90639 15.8182 3.31622 15.8182 2.58821V1.31818ZM24.7136 6.10693C25.2251 5.59301 25.2251 4.76224 24.7136 4.24832V4.24832C24.1987 3.73107 23.3613 3.73107 22.8465 4.24832L22.3455 4.75151C21.834 5.26544 21.8339 6.0962 22.3455 6.61013V6.61013C22.8604 7.12738 23.6977 7.12738 24.2126 6.61013L24.7136 6.10693ZM22.3258 22.3965C21.8174 22.9072 21.8163 23.7323 22.3232 24.2445L22.8359 24.7623C23.3489 25.2806 24.1859 25.2817 24.7004 24.7649V24.7649C25.2115 24.2514 25.2104 23.421 24.6978 22.9089L24.1822 22.3939C23.6692 21.8813 22.8375 21.8825 22.3258 22.3965V22.3965ZM26.3697 13.1758C25.6383 13.1758 25.0455 13.7687 25.0455 14.5V14.5C25.0455 15.2313 25.6383 15.8242 26.3697 15.8242H27.6758C28.4071 15.8242 29 15.2313 29 14.5V14.5C29 13.7687 28.4071 13.1758 27.6758 13.1758H26.3697ZM14.5 6.55479C10.1368 6.55479 6.59091 10.1169 6.59091 14.5C6.59091 18.8831 10.1368 22.4452 14.5 22.4452C18.8632 22.4452 22.4091 18.8831 22.4091 14.5C22.4091 10.1169 18.8632 6.55479 14.5 6.55479ZM13.1818 27.6818C13.1818 28.4098 13.772 29 14.5 29V29C15.228 29 15.8182 28.4098 15.8182 27.6818V26.4118C15.8182 25.6838 15.228 25.0936 14.5 25.0936V25.0936C13.772 25.0936 13.1818 25.6838 13.1818 26.4118V27.6818ZM4.28127 22.8931C3.77213 23.4074 3.77329 24.2362 4.28386 24.7491V24.7491C4.79976 25.2673 5.63906 25.2662 6.15352 24.7465L6.65964 24.2352C7.16878 23.7209 7.16762 22.8921 6.65705 22.3792V22.3792C6.14115 21.861 5.30185 21.8621 4.78739 22.3818L4.28127 22.8931Z" fill="black"/>
                    </svg>
                    </div>
                </div>
              <span class="tooltip">Dark/Light<br><span class="controls-tooltip">(CTRL + Q)</span></span>
          </div>
          
          <div class="option colors-option randomize" id="randomize" tabindex="0">
              <div class="option-label">Randomize</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="31" viewBox="0 0 33 31" fill="none">
                  <rect x="4.06797" y="2.90574" width="24.4083" height="24.4083" rx="3.84742" stroke="var(--static2)" stroke-width="1.1623"/>
                  <circle cx="10.0138" cy="8.85138" r="1.87757" fill="var(--static2)"/>
                  <circle cx="22.5306" cy="8.85138" r="1.87757" transform="rotate(90 22.5306 8.85138)" fill="var(--static2)"/>
                  <circle cx="16.2718" cy="15.11" r="1.87757" transform="rotate(90 16.2718 15.11)" fill="var(--static2)"/>
                  <circle cx="22.5304" cy="21.3685" r="1.87757" fill="var(--static2)"/>
                  <circle cx="10.014" cy="21.3685" r="1.87757" transform="rotate(90 10.014 21.3685)" fill="var(--static2)"/>
              </svg>
              <div class="randomize-options-open" onclick="event.stopPropagation();">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.78385 15.5547L12.8255 11.513L16.8672 15.5547C17.2734 15.9609 17.9297 15.9609 18.3359 15.5547C18.7422 15.1484 18.7422 14.4922 18.3359 14.0859L13.5547 9.30469C13.1484 8.89844 12.4922 8.89844 12.0859 9.30469L7.30469 14.0859C6.89844 14.4922 6.89844 15.1484 7.30469 15.5547C7.71094 15.9505 8.3776 15.9609 8.78385 15.5547Z" fill="black"/>
              </svg>
              
              
              </div>
              

              <span class="tooltip">Randomize<br><span class="controls-tooltip">(Spacebar)</span></span>
              <div class="color-settings randomize-settings" onclick="event.stopPropagation();">
                
                <div style="padding: 0 0 10px 0">Select a color scheme</div>
                <div class="scheme-option all selected-scheme" data-scheme="all">All</div>
                <div class="scheme-option" data-scheme="monochromatic">Monochromatic</div>
                <div class="scheme-option" data-scheme="analogous">Analogous</div>
                <div class="scheme-option" data-scheme="complementary">Complementary</div>
                <div class="scheme-option" data-scheme="complementary">Triadic</div>
                <div class="scheme-option" data-scheme="split-complementary">Split Complementary</div>
                <div class="scheme-option" data-scheme="double-split-complementary">Double-Split Complementary</div>
                <div class="scheme-option" data-scheme="square">Square</div>
                <div class="scheme-option" data-scheme="compound">Compound</div>
                <div class="scheme-option" data-scheme="shades">Shades</div>
              </div>
          </div>

          <div class="option colors-option undo" id="undo" tabindex="0">
              <div class="option-label">Undo</div>
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.265 10.9368C16.0693 6.4747 11.4329 3.84005 6.90913 5.05219C4.4627 5.7077 2.55025 7.35401 1.49881 9.4335" stroke="black" stroke-width="1.28532"/>
                  <path d="M6.89052 9.97853L1.52381 9.52598L1.11855 3.54119" stroke="black" stroke-width="1.28532"/>
              </svg>     
              <span class="tooltip">Undo<br><span class="controls-tooltip">(← Left arrow)</span></span>  
          </div>

          <div class="option colors-option redo" id="redo" tabindex="0">
              <div class="option-label">Redo</div>
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.876628 11.2114C2.07226 6.74924 6.65879 4.10121 11.1209 5.29683C13.534 5.94342 15.4166 7.58172 16.4476 9.65573" stroke="black" stroke-width="1.28532"/>
                  <path d="M11.1222 10.2189L16.4222 9.74848L16.8427 3.76777" stroke="black" stroke-width="1.28532"/>
              </svg>
              <span class="tooltip">Redo<br><span class="controls-tooltip">(Right arrow →)</span></span> 
          </div>

          <div class="option colors-option export" id="export" tabindex="0">
              <div class="option-label">Export</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                  <path d="M17.3248 17.8251V10.2169C17.3248 9.98865 17.2335 9.78186 17.0831 9.63415C16.9328 9.48376 16.726 9.39246 16.5004 9.39246C16.2721 9.39246 16.0653 9.48376 15.9176 9.63415C15.7672 9.78455 15.6759 9.98865 15.6759 10.2169V17.8251L12.7433 15.2657C12.5741 15.118 12.3593 15.0509 12.1498 15.0616C11.9376 15.0751 11.7335 15.1664 11.5805 15.3356C11.4301 15.5048 11.3629 15.7196 11.3737 15.9291C11.3871 16.1386 11.4784 16.3427 11.6476 16.493L15.9552 20.2528C16.1137 20.3925 16.3124 20.4596 16.5084 20.4596C16.7045 20.4596 16.9005 20.3844 17.0509 20.2448L21.3558 16.485C21.5197 16.3346 21.611 16.1332 21.6244 15.9264C21.6378 15.7169 21.568 15.5048 21.4176 15.3356L21.4122 15.3302C21.2619 15.1637 21.0578 15.0751 20.851 15.0616H20.8483C20.6388 15.0509 20.424 15.118 20.2548 15.2684L17.3248 17.8251Z" fill="#0F0F0F"/>
                  <rect x="4.109" y="2.93511" width="24.6552" height="24.6552" rx="3.88633" stroke="var(--static2)" stroke-width="1.17406"/>
              </svg>
              <span class="tooltip">Export<br><span class="controls-tooltip">(CTRL + E)</span></span>
          </div>

          <div class="option colors-option share-link" id="share-link" onclick="copyPageUrl()">
              <span class="tooltip tooltip-share">Share Link<br><span class="controls-tooltip">(CTRL + S)</span></span>
              <div class="share-link-buttn option-label">Share Link</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="31" viewBox="0 0 33 31" fill="none">
                  <rect x="4.06797" y="2.90574" width="24.4083" height="24.4083" rx="3.84742" stroke="var(--static2)" stroke-width="1.1623"/>
                  <path d="M12 18.5968H11.6229C10.3391 18.5968 9.29834 17.5561 9.29834 16.2722V9.29842C9.29834 8.01458 10.3391 6.97382 11.6229 6.97382H16.2722C17.556 6.97382 18.5968 8.01458 18.5968 9.29842V16.2722C18.5968 17.5561 17.556 18.5968 16.2722 18.5968H16" stroke="var(--static2)" stroke-width="1.1623"/>
                  <path d="M20.5 11.623H20.9216C22.2054 11.623 23.2462 12.6638 23.2462 13.9477V20.9215C23.2462 22.2053 22.2054 23.2461 20.9216 23.2461H16.2724C14.9885 23.2461 13.9478 22.2053 13.9478 20.9215V19.7592V13.9477C13.9478 12.6638 14.9885 11.623 16.2724 11.623H16.5" stroke="var(--static2)" stroke-width="1.1623"/>
              </svg>
              
              
          </div>


      </div>


      

      <div style="height: 50px; width: 2px; background-color: var(--static2); opacity: 20%; align-self: center;" class="divider-line"></div>





      <!-- Fonts -->
      <div class="option fonts-rollout" id="rolloutbutton">
          Fonts
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M0 6.5H13" stroke="var(--static2)" stroke-width="1.2"/>
              <path d="M6.5 0L6.5 13" stroke="var(--static2)" stroke-width="1.2"/>
          </svg>
          <span class="tooltip">Font Setup</span>
      </div>

      <div class="font-tools-span hide">

          <div class="option fonts-option heading-fonts-buttn rollout-fonts" id="heading-fonts-buttn" tabindex="0">
              <div class="heading-fonts-label" id="headings-fonts-label">Headings</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="var(--static2)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <div class="heading-fonts-box">
                  <div class="fonts-row">
                            <div class="font-input-label small">Upload from device (local)</div>
                          <label for="font-upload-headings" class="utility-button">
                              <span id="heading-label-span">Upload</span>
                              <input type="file" id="font-upload-headings" accept=".ttf, .otf, .woff2, .eot, .woff" />
                              <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5184 13.3533L15.5184 20.8853C15.5184 21.1113 15.6088 21.316 15.7577 21.4623C15.9066 21.6111 16.1113 21.7015 16.3346 21.7015C16.5606 21.7015 16.7654 21.6111 16.9116 21.4623C17.0605 21.3134 17.1509 21.1113 17.1509 20.8853L17.1509 13.3533L20.0541 15.887C20.2216 16.0333 20.4343 16.0997 20.6417 16.0891C20.8517 16.0758 21.0538 15.9854 21.2053 15.8179C21.3542 15.6504 21.4207 15.4377 21.41 15.2304C21.3967 15.023 21.3063 14.8209 21.1389 14.672L16.8744 10.9499C16.7175 10.8117 16.5208 10.7452 16.3267 10.7452C16.1326 10.7452 15.9385 10.8196 15.7896 10.9579L11.5278 14.68C11.3656 14.8289 11.2752 15.0283 11.2619 15.233C11.2486 15.4404 11.3178 15.6504 11.4666 15.8179L11.472 15.8232C11.6208 15.9881 11.8229 16.0758 12.0276 16.0891L12.0303 16.0891C12.2377 16.0997 12.4503 16.0333 12.6178 15.8844L15.5184 13.3533Z" fill="#0F0F0F"/>
                                <rect x="28.602" y="28.0943" width="24.4083" height="24.4083" rx="3.84742" transform="rotate(-180 28.602 28.0943)" stroke="black" stroke-width="1.1623"/>
                            </svg>
                          </label>
                          <div class="font-input-label small" style="margin: 10px 0 0 0 !important;">OR Enter font (Google or local)</div>
                          <div class="font-input-cont" tabindex="0">
                            <input type="text" id="google-font-select-heading" class="font-type-input" placeholder="e.g. Roboto">
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" class="enter-icon">
                                <g clip-path="url(#clip0_401_3029)">
                                <path d="M22.9587 8.45833V13.2917H7.04491L11.3707 8.95375L9.66699 7.25L2.41699 14.5L9.66699 21.75L11.3707 20.0463L7.04491 15.7083H25.3753V8.45833H22.9587Z" fill="black" fill-opacity="0.48"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_401_3029">
                                <rect width="29" height="29" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                          </div>
                          

                          <div id="heading-error-message" class="error-message-fonts small"></div>

                          <div style="height: 2px; background-color: var(--static); width: 100%;"></div>
                          <div class="utility-button reset-font-heading">
                                <span id="heading-label-span">Reset</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="31" viewBox="0 0 33 31" fill="none">
                                  <rect x="4.06797" y="2.90574" width="24.4083" height="24.4083" rx="3.84742" stroke="var(--static2)" stroke-width="1.1623"/>
                                  <path d="M21.3885 11.5047C20.196 10.1536 18.4514 9.30151 16.5077 9.30151C12.9136 9.30151 10 12.2151 10 15.8092C10 19.4033 12.9136 22.3169 16.5077 22.3169C18.4514 22.3169 20.196 21.4648 21.3885 20.1138C22.308 19.072 22.8991 17.7335 23 16.2603" stroke="var(--static2)"/>
                                  <path d="M17.5 13L21.3883 11.5792L20.5 7" stroke="var(--static2)"/>
                              </svg>
                          </div>
                          <a href="/docs/font-setup" class="link small utility-link" target="_blank">Learn more or Troubleshoot</a>
                  </div>
              </div>
          </div>


          <div class="option fonts-option text-fonts-buttn rollout-fonts" id="text-fonts-buttn" tabindex="0">
              <div class="text-fonts-label" id="texts-fonts-label">Texts</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="var(--static2)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>


              <div class="text-fonts-box">
                  <div class="fonts-row">
                            <div class="font-input-label small">Upload from device (local)</div>
                          <label for="font-upload-texts" class="utility-button">
                            <span id="text-label-span">Upload</span>
                            <input type="file" id="font-upload-texts" accept=".ttf, .otf, .woff2, .eot, .woff" />
                            <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5184 13.3533L15.5184 20.8853C15.5184 21.1113 15.6088 21.316 15.7577 21.4623C15.9066 21.6111 16.1113 21.7015 16.3346 21.7015C16.5606 21.7015 16.7654 21.6111 16.9116 21.4623C17.0605 21.3134 17.1509 21.1113 17.1509 20.8853L17.1509 13.3533L20.0541 15.887C20.2216 16.0333 20.4343 16.0997 20.6417 16.0891C20.8517 16.0758 21.0538 15.9854 21.2053 15.8179C21.3542 15.6504 21.4207 15.4377 21.41 15.2304C21.3967 15.023 21.3063 14.8209 21.1389 14.672L16.8744 10.9499C16.7175 10.8117 16.5208 10.7452 16.3267 10.7452C16.1326 10.7452 15.9385 10.8196 15.7896 10.9579L11.5278 14.68C11.3656 14.8289 11.2752 15.0283 11.2619 15.233C11.2486 15.4404 11.3178 15.6504 11.4666 15.8179L11.472 15.8232C11.6208 15.9881 11.8229 16.0758 12.0276 16.0891L12.0303 16.0891C12.2377 16.0997 12.4503 16.0333 12.6178 15.8844L15.5184 13.3533Z" fill="#0F0F0F"/>
                                <rect x="28.602" y="28.0943" width="24.4083" height="24.4083" rx="3.84742" transform="rotate(-180 28.602 28.0943)" stroke="black" stroke-width="1.1623"/>
                            </svg>

                          </label>
                          <div class="font-input-label small" style="margin: 10px 0 0 0 !important;">OR Enter font (Google or local)</div>

                          <div class="font-input-cont" tabindex="0">
                            <input type="text" id="google-font-select-text" class="font-type-input" placeholder="e.g. Roboto">
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" class="enter-icon">
                            <g clip-path="url(#clip0_401_3029)">
                            <path d="M22.9587 8.45833V13.2917H7.04491L11.3707 8.95375L9.66699 7.25L2.41699 14.5L9.66699 21.75L11.3707 20.0463L7.04491 15.7083H25.3753V8.45833H22.9587Z" fill="black" fill-opacity="0.48"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_401_3029">
                            <rect width="29" height="29" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>

                        </div>
                          <datalist class="font-options"></datalist>
                          <div id="text-error-message" class="error-message-fonts small"></div>


                          <div style="height: 2px; background-color: var(--static); width: 100%;"></div>
                          <div class="utility-button reset-font-text">
                          
                          <span id="text-label-span">Reset</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="31" viewBox="0 0 33 31" fill="none">
                                  <rect x="4.06797" y="2.90574" width="24.4083" height="24.4083" rx="3.84742" stroke="var(--static2)" stroke-width="1.1623"/>
                                  <path d="M21.3885 11.5047C20.196 10.1536 18.4514 9.30151 16.5077 9.30151C12.9136 9.30151 10 12.2151 10 15.8092C10 19.4033 12.9136 22.3169 16.5077 22.3169C18.4514 22.3169 20.196 21.4648 21.3885 20.1138C22.308 19.072 22.8991 17.7335 23 16.2603" stroke="var(--static2)"/>
                                  <path d="M17.5 13L21.3883 11.5792L20.5 7" stroke="var(--static2)"/>
                              </svg>
                          </div>
                        <a href="/docs/font-setup" class="link small utility-link" target="_blank">Learn more or Troubleshoot</a>
                  </div>
              </div>
          </div>
      </div>



      
  </div>

  
  

    
      `;
  }
}

customElements.define("tool-bar", toolBar);

class exportOptions extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

      <div id="overlay"></div> 

  <div id="popup" style="flex-direction: column; justify-content: flex-start;">
      <ul class="tabList">
          <li class="tab active" data-tab="tab1">Download Zip</li>
          <li class="tab" data-tab="tab2">CSS</li>
          <li class="tab" data-tab="tab3">Tailwind CSS</li>
          <li class="tab" data-tab="tab4">SCSS</li>
          <li class="tab" data-tab="tab5">CSV</li>
          <li class="tab" data-tab="tab6">Shades</li>
          <li class="tab" data-tab="tab7">QR</li>
          <div class="line active"></div>
      </ul>
      <div class="tabContent active" id="tab1">
          <label for="file-name" class="export-label">Enter file name</label>
          <input type="text" name="file-name" id="file-name-input" class="file-name-input" placeholder="e.g., my_colors">
          <div class="error-message" id="error-message"></div>
          <div class="utility-button" style="width: 100%;" id="download">Download</div>
          <p class="small"><a href="/docs/exporting" target="_blank" class="link utility-link">Learn more</a> - <a href="/docs/contributions?colors=000000-ffffff-8fb4ff-ebf1ff-ff8f94#:~:text=You%20can%20submit,a%20Google%20Form." target="_blank" class="link utility-link">Request an export option</a></p>
      </div>
      <div class="tabContent" id="tab2">
        <div class="code-type-cont">
            <div class="css-hex code-type selected-type">HEX</div>
            <div class="css-rgb code-type">RGB</div>
            <div class="css-hsl code-type">HSL</div>
        </div>
          <div class="code-block">
              <pre id="css-code"></pre>
          </div>
          <div class="utility-button" id="copy-css" style="width: 100%;">Copy</div>
          <p class="small"><a href="/docs/exporting" target="_blank" class="link utility-link">Learn more</a> - <a href="/docs/contributions?colors=000000-ffffff-8fb4ff-ebf1ff-ff8f94#:~:text=You%20can%20submit,a%20Google%20Form." target="_blank" class="link utility-link">Request an export option</a></p>
      </div>
      <div class="tabContent" id="tab3">
      <div class="code-type-cont">
            <div class="tcss-hex code-type selected-type">HEX</div>
            <div class="tcss-rgb code-type">RGB</div>
            <div class="tcss-hsl code-type">HSL</div>
        </div>
          <div class="code-block">
              <pre id="tailwind-code"></pre>
          </div>
          <div class="utility-button" id="copy-tailwind" style="width: 100%;">Copy</div>
          <p class="small"><a href="/docs/exporting" target="_blank" class="link utility-link">Learn more</a> - <a href="/docs/contributions?colors=000000-ffffff-8fb4ff-ebf1ff-ff8f94#:~:text=You%20can%20submit,a%20Google%20Form." target="_blank" class="link utility-link">Request an export option</a></p>
      </div>
      <div class="tabContent" id="tab4">
      <div class="code-type-cont">
            <div class="scss-hex code-type selected-type">HEX</div>
            <div class="scss-rgb code-type">RGB</div>
            <div class="scss-hsl code-type">HSL</div>
        </div>
          <div class="code-block">
              <pre id="scss-code"></pre>
          </div>
          <div class="utility-button" id="copy-scss" style="width: 100%;">Copy</div>
          <p class="small"><a href="/docs/exporting" target="_blank" class="link utility-link">Learn more</a> - <a href="/docs/contributions?colors=000000-ffffff-8fb4ff-ebf1ff-ff8f94#:~:text=You%20can%20submit,a%20Google%20Form." target="_blank" class="link utility-link">Request an export option</a></p>
      </div>
      <div class="tabContent" id="tab5">
          <p>Without #:</p>
          <div class="code-block">
          <pre id="csv-code-without-hash"></pre>
          </div>
          <div class="utility-button" id="copy-csv-without-hash" style="width: 100%;">Copy</div>
          <p>With #:</p>
          <div class="code-block">
          <pre id="csv-code-with-hash"></pre>
          </div>
          <div class="utility-button" id="copy-csv-with-hash" style="width: 100%;">Copy</div>
          <p class="small"><a href="/docs/exporting" target="_blank" class="link utility-link">Learn more</a> - <a href="/docs/contributions?colors=000000-ffffff-8fb4ff-ebf1ff-ff8f94#:~:text=You%20can%20submit,a%20Google%20Form." target="_blank" class="link utility-link">Request an export option</a></p>
      </div>
      <div class="tabContent" id="tab6">
        <div class="shade-cont">
            <div class="text-shades"></div>
            <div class="bg-shades"></div>
          <div class="primary-shades">
          </div>
          <div class="secondary-shades">
          </div>
          <div class="accent-shades">
          </div>
        </div>
        <p class="small"><a href="/docs/exporting" target="_blank" class="link utility-link">Learn more</a> - <a href="/docs/contributions?colors=000000-ffffff-8fb4ff-ebf1ff-ff8f94#:~:text=You%20can%20submit,a%20Google%20Form." target="_blank" class="link utility-link">Request an export option</a></p>
      </div>
      <div class="tabContent" id="tab7">
        <div style="padding-top: 10px">Scan the QR code on your phone or tablet to view the same colors quickly.</div>
        <div id="qrcode"></div>
      
        <p class="small"><a href="/docs/exporting" target="_blank" class="link utility-link">Learn more</a> - <a href="/docs/contributions?colors=000000-ffffff-8fb4ff-ebf1ff-ff8f94#:~:text=You%20can%20submit,a%20Google%20Form." target="_blank" class="link utility-link">Request an export option</a></p>
      </div>

  
  

    
      `;
  }
}

customElements.define("export-options", exportOptions);
