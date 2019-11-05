import { h } from '@stencil/core';

export class SvgSrc {
  public static articleIcon() {
    return (
      <path d="M118.96 18.175c0 1.376-.481 2.547-1.445 3.51-.964.964-2.134 1.446-3.511 1.446H4.957c-1.377 0-2.547-.482-3.511-1.445C.482 20.722 0 19.55 0 18.175V4.957C0 3.58.482 2.41 1.446 1.446S3.58 0 4.956 0h109.048c1.377 0 2.547.482 3.51 1.446.965.964 1.447 2.134 1.447 3.51v13.219zM4.958 76.003c-1.377 0-2.547-.482-3.511-1.446S0 72.423 0 71.046V57.828c0-1.377.482-2.547 1.446-3.51.964-.965 2.134-1.447 3.51-1.447h175.137c1.377 0 2.547.482 3.511 1.446s1.446 2.134 1.446 3.511v13.218c0 1.377-.482 2.547-1.446 3.51-.964.965-2.134 1.447-3.51 1.447H4.956zm0 105.742c-1.377 0-2.547-.482-3.511-1.445C.482 179.336 0 178.166 0 176.789V163.57c0-1.377.482-2.547 1.446-3.511s2.134-1.446 3.51-1.446h175.137c1.377 0 2.547.482 3.511 1.446s1.446 2.134 1.446 3.51v13.219c0 1.377-.482 2.547-1.446 3.51-.964.964-2.134 1.446-3.51 1.446H4.956zm109.047-76.002c1.377 0 2.547.482 3.51 1.445.965.964 1.447 2.135 1.447 3.511v13.218c0 1.377-.482 2.547-1.446 3.511s-2.134 1.446-3.511 1.446H4.957c-1.377 0-2.547-.482-3.511-1.446S0 125.294 0 123.918v-13.219c0-1.376.482-2.547 1.446-3.51.964-.964 2.134-1.446 3.51-1.446h109.048z" />
    );
  }

  public static podcastIcon() {
    return (
      <path d="M30.857 41.151c0-11.43 4-21.147 12-29.149C50.857 4.001 60.571 0 72 0c11.428 0 21.143 4 29.143 12.002s12 17.718 12 29.149v68.585c0 11.43-4 21.147-12 29.149-8 8.001-17.715 12.002-29.143 12.002-11.429 0-21.143-4-29.143-12.002s-12-17.718-12-29.15V41.152zm108 44.58c1.428 0 2.643.5 3.643 1.5s1.5 2.215 1.5 3.644v18.86c0 12.003-2.715 23.077-8.143 33.222-5.429 10.145-12.857 18.575-22.286 25.29-9.428 6.716-19.857 10.931-31.285 12.646v19.718h29.142c1.429 0 2.643.5 3.643 1.5s1.5 2.215 1.5 3.644v8.573c0 1.429-.5 2.643-1.5 3.644-1 1-2.214 1.5-3.643 1.5H32.571c-1.428 0-2.643-.5-3.642-1.5-1-1-1.5-2.215-1.5-3.644v-8.573c0-1.429.5-2.643 1.5-3.644 1-1 2.214-1.5 3.642-1.5h29.143v-19.718c-11.428-1.715-21.857-5.93-31.286-12.645-9.428-6.716-16.857-15.146-22.285-25.291C2.714 132.812 0 121.738 0 109.736v-18.86c0-1.43.5-2.644 1.5-3.644s2.214-1.5 3.643-1.5h10.286c1.428 0 2.642.5 3.642 1.5s1.5 2.214 1.5 3.643v18.86c0 9.431 2.358 18.076 7.072 25.935 4.714 7.858 11 14.074 18.857 18.646 7.857 4.573 16.428 6.859 25.714 6.859 9.286 0 17.857-2.358 25.714-7.073 7.857-4.715 14.072-11.074 18.643-19.075 4.572-8.002 6.857-16.575 6.857-25.72V90.875c0-1.429.5-2.643 1.5-3.643s2.215-1.5 3.643-1.5h10.286z" />
    );
  }

  public static videoIcon() {
    return (
      <path d="M168.209 84.996c4.231 2.371 7.075 5.665 8.53 9.88 1.454 4.217 1.454 8.433 0 12.649-1.455 4.216-4.299 7.51-8.53 9.88L28.564 199.619c-3.967 2.371-8.2 3.162-12.695 2.371-4.496-.79-8.265-2.898-11.307-6.324C1.521 192.24 0 188.155 0 183.412V18.99c0-5.27 1.587-9.552 4.76-12.845C7.935 2.85 11.77.874 16.266.214c4.497-.658 8.596.198 12.299 2.57l139.645 82.212z" />
    );
  }

  public static bullseyeIcon(width, height, fillColor) {
    return (
      <svg
        width={width}
        height={height}
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
      >
        <path
          fill={fillColor}
          d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"
        />
      </svg>
    );
  }

  public static locationPinIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        width="512px"
        height="512px"
        viewBox="0 0 491.582 491.582"
        class=""
      >
        <g>
          <g>
            <g>
              <path
                d="M245.791,0C153.799,0,78.957,74.841,78.957,166.833c0,36.967,21.764,93.187,68.493,176.926    c31.887,57.138,63.627,105.4,64.966,107.433l22.941,34.773c2.313,3.507,6.232,5.617,10.434,5.617s8.121-2.11,10.434-5.617    l22.94-34.771c1.326-2.01,32.835-49.855,64.967-107.435c46.729-83.735,68.493-139.955,68.493-176.926    C412.625,74.841,337.783,0,245.791,0z M322.302,331.576c-31.685,56.775-62.696,103.869-64.003,105.848l-12.508,18.959    l-12.504-18.954c-1.314-1.995-32.563-49.511-64.007-105.853c-43.345-77.676-65.323-133.104-65.323-164.743    C103.957,88.626,167.583,25,245.791,25s141.834,63.626,141.834,141.833C387.625,198.476,365.647,253.902,322.302,331.576z"
                data-original="#000000"
                class="active-path"
                data-old_color="#000000"
              />
              <path
                d="M245.791,73.291c-51.005,0-92.5,41.496-92.5,92.5s41.495,92.5,92.5,92.5s92.5-41.496,92.5-92.5    S296.796,73.291,245.791,73.291z M245.791,233.291c-37.22,0-67.5-30.28-67.5-67.5s30.28-67.5,67.5-67.5    c37.221,0,67.5,30.28,67.5,67.5S283.012,233.291,245.791,233.291z"
                data-original="#000000"
                class="active-path"
                data-old_color="#000000"
              />
            </g>
          </g>
        </g>{' '}
      </svg>
    );
  }

  public static closeIcon() {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fal"
        data-icon="times"
        class="svg-inline--fa fa-times fa-w-10"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill=""
          d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
        />
      </svg>
    );
  }

  public static chevronDown() {
    return (
      <svg class="icon icon-1 pull-right push-left" id="chevron-down" width="256" height="256" viewBox="0 0 256 256">
        <g>
          <path
            d="M200.731183,135.586367 L92.1357833,244.181767 C90.2822,246.03535 88.0864167,246.962633 85.5494167,246.962633 C83.0124167,246.962633 80.8176167,246.03535 78.96305,244.181767 L54.6678333,219.88655 C52.81425,218.032967 51.8869667,215.837183 51.8869667,213.300183 C51.8869667,210.763183 52.81425,208.568383 54.6678333,206.713817 L132.383617,129 L54.6688167,51.2852 C52.8152333,49.4316167 51.88795,47.2358333 51.88795,44.6988333 C51.88795,42.1618333 52.8152333,39.9670333 54.6688167,38.1124667 L78.9640333,13.81725 C80.8176167,11.9636667 83.0134,11.0363833 85.5504,11.0363833 C88.0874,11.0363833 90.2822,11.9636667 92.1367667,13.81725 L200.731183,122.413633 C202.584767,124.267217 203.51205,126.463 203.51205,129 C203.51205,131.537 202.584767,133.7318 200.731183,135.586367 Z"
            id="chevron-down"
            transform="translate(127.699508, 128.999508) rotate(90.000000) translate(-127.699508, -128.999508) "
          />
        </g>
      </svg>
    );
  }

  public static notificationRed() {
    return (
      <svg version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 510 510" class="">
        <g>
          <g>
            <g id="error">
              <path
                d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M280.5,382.5h-51v-51h51V382.5z     M280.5,280.5h-51v-153h51V280.5z"
                data-original="#000000"
                class="active-path"
                data-old_color="#000000"
                fill="#FF0000"
              />
            </g>
          </g>
        </g>{' '}
      </svg>
    );
  }
}
