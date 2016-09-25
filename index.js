//const
var WIDTH = screen.width;
var HEIGHT = screen.height;
var DOMURL = window.URL || window.webkitURL || window;
var TOTAL_FRAME = HEIGHT+200,REFRESH_SPEED=25,STEP = 30,MIDPOINT=TOTAL_FRAME/2;
var EXPLOSION_OFFSET = -HEIGHT/8-20,EXPLOSION_TIME=50;
//ship
var ship_img = new Image();
var ship = new Blob(['<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 573.48 873.1"><defs><style>.cls-1{fill:#c13b2c;}.cls-2{fill:#ecf0f1;}.cls-3{fill:#e04c42;}.cls-4{fill:#2a7fb9;}.cls-5{fill:#eff3f4;opacity:0.5;}.cls-6{fill:#eef2f3;}.cls-7{fill:#e64d3d;}.cls-8{fill:#f29c1f;}.cls-9{fill:#d15627;}</style></defs><title>pew_js_texture</title><rect class="cls-1" x="122.7" y="359.72" width="70.44" height="179.89" rx="12" ry="12"/><rect class="cls-1" x="380.33" y="359.72" width="70.44" height="179.89" rx="12" ry="12"/><path class="cls-2" d="M445.68,254.12L227.17,521.79c-7.67,9.4,8.78,19.2,32.22,19.2H477.9c18.83,0,34.1-6.48,34.1-14.46V258.86C512,242.54,458.26,238.71,445.68,254.12Z" transform="translate(-225.26 -76.67)"/><path class="cls-2" d="M578.32,254.12L796.83,521.79c7.67,9.4-8.78,19.2-32.22,19.2H546.1c-18.83,0-34.1-6.48-34.1-14.46V258.86C512,242.54,565.74,238.71,578.32,254.12Z" transform="translate(-225.26 -76.67)"/><polygon class="cls-3" points="101.4 323.25 101.4 464.32 62.2 464.32 62.2 371.27 101.4 323.25"/><polygon class="cls-3" points="471.42 323.25 471.42 464.32 510.62 464.32 510.62 371.27 471.42 323.25"/><ellipse class="cls-2" cx="286.74" cy="172.09" rx="75.97" ry="172.09"/><rect class="cls-1" x="210.76" y="179.39" width="151.95" height="415.76"/><circle class="cls-2" cx="286.74" cy="261.76" r="61.95"/><circle class="cls-4" cx="286.74" cy="261.76" r="43.8"/><polygon class="cls-5" points="306.96 216.49 318.28 216.49 330.54 297.96 318.75 307.03 306.96 216.49"/><polygon class="cls-5" points="301.25 216.49 312.57 216.49 324.83 297.96 313.04 307.03 301.25 216.49"/><rect class="cls-6" x="122.7" y="474.05" width="70.44" height="30.97"/><rect class="cls-6" x="380.33" y="474.05" width="70.44" height="30.97"/><rect class="cls-2" x="204.4" y="595.15" width="164.67" height="29.06" rx="12" ry="12"/><rect class="cls-7" x="204.4" y="609.68" width="164.67" height="6.07"/><path class="cls-8" d="M508.95,715.39c-11.78,5.77-23.46,13.24-32.63,22.73-8.54,8.83-13.77,22.26-16,34.19-1.08,5.78-1.33,11.91.46,17.59,1.92,6.1,6.09,11.22,9.32,16.65a175.4,175.4,0,0,1,9.88,19c3.2,7.26,6,15.71,2.37,23.35-1,2,1.17,5,3.42,3.42,10.08-7,12.22-18.81,12.22-30.35l-4.27,1.77c8.68,10.24,7.68,24.12,5.32,36.47-0.6,3.14,4.22,4.49,4.82,1.33,2.74-14.33,3.38-29.56-6.6-41.33-1.44-1.7-4.27-.28-4.27,1.77,0,9.55-1.25,20.15-9.75,26l3.42,3.42c5.14-11,.61-22.34-4.3-32.53A190.21,190.21,0,0,0,472,800c-3.82-6.07-7.32-11.36-7.51-18.81-0.16-6.5,1.73-13,3.93-19,2.51-6.9,5.43-13.89,10.39-19.42,8.83-9.86,20.92-17.32,32.7-23.09,2.89-1.42.36-5.73-2.52-4.32h0Z" transform="translate(-225.26 -76.67)"/><path class="cls-8" d="M498.81,860.15c-6.75,29.44-13.29,65.55,11.26,89,2,1.89,5.54-.58,3.93-3-9.53-14.44-6.41-32.33.52-47.16,7.06-15.11,16.63-29.14,25.12-43.47,15.78-26.65,31-57.54,22.4-89.25a74.26,74.26,0,0,0-25-38.12c-2.48-2-6,1.51-3.54,3.54a69.78,69.78,0,0,1,23.69,35.91c4.39,16.11,2,32.95-3.46,48.49-5.63,15.9-14.53,30.4-23.15,44.8-8.13,13.58-17.32,27-23.1,41.83s-6.92,32.18,2.17,45.95l3.93-3c-23.13-22-16.3-56.48-10-84.09,0.72-3.13-4.1-4.47-4.82-1.33h0Z" transform="translate(-225.26 -76.67)"/><path class="cls-8" d="M508.4,719.3c8,3.51,16.9,5.43,23.47,11.27,2.4,2.13,5.95-1.39,3.54-3.54-3-2.69-6.08-5.23-10-6.57-5-1.7-9.69-3.36-14.52-5.48-2.92-1.28-5.47,3-2.52,4.32h0Z" transform="translate(-225.26 -76.67)"/><path class="cls-8" d="M477.16,769.67a243.47,243.47,0,0,1,16.28-19.6c4.77-5.2,1-12-5.3-12.8a17.56,17.56,0,0,0-17.87,10.19c-3.73,8.65,7.72,16,13,7.57a36.69,36.69,0,0,1,13.38-12.91c5.18-2.9,12.1-6.59,18-7.54h-4c3.38,0.68,6.85,3.08,9.93,4.63,2.45,1.23,6.25,2.41,8.29,4.33,2.26,2.14,3.72,5.64,5.94,8a32.32,32.32,0,0,1,5.71,7.36,88,88,0,0,1,7.1,19.17c1.55,6.21,2,13.72-2.44,18.91l12.54,3.31c-6.15-14.76-4.57-31.57-12.28-45.85-6.8-12.58-23-23.36-37.58-22.54-8.3.47-14.35,4.82-20.75,9.64s-13.58,9.18-18.88,15.4c-10,11.71-11.83,29.48,1.17,39.87,4.95,4,12.63,1.65,12.8-5.3,0.22-8.92,1.49-16.23,8.33-22.46a40.81,40.81,0,0,1,20.62-9.5c8.4-1.32,14,1.8,15.16,10.53,1.32,10.17.39,20.59,1.7,30.83,0.53,4.09.44,9.33,3.72,12.36,4,3.71,10.2,2.48,14-.91,7.85-7,4.58-17.45.31-25.41A130.08,130.08,0,0,0,529.2,763.4c-6.11-7-13.31-14.28-23.08-15.26-10.93-1.1-20.63,6.08-26.14,15-5.78,9.35-6.93,20.66-6.65,31.41,0.25,9.79,14.13,9.49,15,0,0.36-4,.7-8.52,2.83-12,2.63-4.29,9.06-4.72,13.64-4.55,12.23,0.47,12.77,16.12,13.12,25.15l14.73-2a83.07,83.07,0,0,0-9.3-25.86c-4-7.19-10-16.71-17.3-21.08a10.55,10.55,0,0,0-12.55,1.31c-3.58,3.24-3.81,8-4.79,12.39a75.55,75.55,0,0,1-12.33,27.29c-4.86,6.88,6.39,15.71,11.78,9.09,3.38-4.16,6.91-8.9,11.68-11.55,2.62-1.46,2.56-1.41,4.33,1.06a32.18,32.18,0,0,1,4.29,8.62l9.23-9.23c-6.92-1.67-14.64-4.6-21.83-3.29-5.87,1.07-11.27,5.4-12.23,11.53-0.79,5.11,2,9,7.23,9.49a176.51,176.51,0,0,1,38.74,8.34c10.86,3.52,23.27,2.63,27.74-9.53,3.08-8.4-9.19-12.41-13.71-5.78a50.15,50.15,0,0,0-7.22,16.29c-1.33,5.39,3.6,10.94,9.23,9.23,4.74-1.44,8.46-4.86,9.33-9.87,1.18-6.74-7.07-13.39-12.54-7.3a33.5,33.5,0,0,0-6.34,11.18c-1.1,2.92-1.8,6.26-4.73,7.83L541.63,834c-1.36-2.14-.59-5-0.59-7.46a19.89,19.89,0,0,0-2.16-9.91c-4-7.07-12.51-8.31-19.89-8.85-3.88-.29-7.81-0.21-11.62-1.11-4-.94-7.51-2.9-11-4.88-3-1.68-5.65-3.17-7.84-5.84-2.46-3-4.64-5.32-8.56-6.4l-2,14.73a77.77,77.77,0,0,1,22.13,3.59c7.94,2.47,13.66-10.23,5.78-13.71-4.36-1.92-9.17-3.82-12.72-7.08a17.28,17.28,0,0,1-3.49-5c-0.18-.33-0.13-1.39-0.4-1.6q-0.41-1.78-2.53,1.92l1,0.23c1.58,0.95,4,1.13,5.74,1.94A33.26,33.26,0,0,1,499.1,788a42.85,42.85,0,0,1,8.73,8.92c5.33,7.26,9.75,16.45,10.14,25.56,0.25,5.78-.87,11.4-2,17.05l-1.66,8.66-0.74,3.85c0-.24-1.13,4.82-0.16,3.9l7.3-1.93-0.64-.14c-9.41-2-13.44,12.43-4,14.46,10.83,2.33,11.45-9.69,12.88-17.12,1.74-9.07,4.2-18.48,4-27.78-0.31-15.14-7.84-30.5-18.16-41.38-7.55-7.95-29.44-23-38.42-9.52-4.07,6.1-1.83,14.6,1.94,20.23,4.77,7.11,12.3,11,19.91,14.36l5.78-13.71a92.8,92.8,0,0,0-26.12-4.13c-8.48-.14-10.15,12.49-2,14.73,1.13,0.31,3.33,4.23,4.6,5.34a48.19,48.19,0,0,0,8.22,5.39c6.73,3.79,13.37,6.58,21.1,7.41,3.63,0.39,14.48-.78,16.15,2.81,0.78,1.68-.17,5.67-0.05,7.54a18.46,18.46,0,0,0,2.71,9.06,7.67,7.67,0,0,0,10.26,2.69,20.68,20.68,0,0,0,8.79-9.58c1.79-3.77,2.47-8.61,5.3-11.77l-12.54-7.3,1.14-.61,9.23,9.23a38.2,38.2,0,0,1,5.71-12.71l-13.71-5.78c-1.13,3.08-19.32-4.08-21.83-4.74A185.85,185.85,0,0,0,490.87,796l7.23,9.49c0.37-2.38-.37-0.56.58-0.88,1.27-.43,3.21.3,4.43,0.57,3.54,0.79,7.07,1.7,10.6,2.55,5.28,1.28,11.1-3.58,9.23-9.23-3.06-9.22-9.55-22.57-21.06-21.88-10.32.62-18.26,9.71-24.3,17.13l11.78,9.09a89.59,89.59,0,0,0,10-18.46,81,81,0,0,0,3.26-9.88q0.54-2.1,1-4.23c0.2-1,1.3-4.07.23-3.52l-3.79,1,1.29,0-3.79-1c2.61,1.3,5,4.8,6.88,7.11a68.31,68.31,0,0,1,6.42,9.79,70.54,70.54,0,0,1,7.41,21.58c1.51,8.34,15.06,6.39,14.73-2-0.36-9.33-1-19.27-6.09-27.4a26.19,26.19,0,0,0-22-12.75c-8.81-.2-18.78,1.94-24.53,9.09-5.13,6.38-6.23,14.55-6.95,22.45h15c-0.21-8.16.17-16.7,4.61-23.84,3.69-5.93,10.09-10.06,16.55-5.7,6.19,4.17,11.22,11,15.59,17a106.83,106.83,0,0,1,6.67,10.21,37.55,37.55,0,0,1,3.17,6.08,7.41,7.41,0,0,1,.67,3.19q-0.57-.83,1.38-1l5.3,2.2c2.79,3.52.91,0,.65-1.88s-0.44-3.66-.62-5.49q-0.54-5.63-.7-11.28c-0.21-7,.33-14.1-1.49-20.91-3.39-12.7-14.47-19.7-27.36-18.78a56.24,56.24,0,0,0-31.84,13.17c-10.46,8.92-13.47,20.74-13.8,34l12.8-5.3c-9.82-7.85-2.87-18.22,4.92-24.53,4.44-3.6,9.2-6.92,13.82-10.29,4.88-3.56,9.17-5.49,15.2-3.75a30.93,30.93,0,0,1,21.36,21.66c3.33,11.55,3.28,23.78,7.95,35,2,4.68,8.45,8.09,12.54,3.31,10-11.76,9-26.76,4.11-40.58-2.18-6.19-4.41-12.83-8-18.39-1.86-2.9-4.21-5.16-6.49-7.69s-3.66-5.8-6.15-8.22c-4.8-4.64-12.5-7.24-18.41-10.13-3.33-1.63-6.38-3.19-10.2-2.48-3,.56-5.82,2-8.64,3.22-13.09,5.45-24,11.76-31.69,24.13l13,7.57c1.1-2.56,2.1-3.13,4.92-2.76l-5.3-12.8a280.06,280.06,0,0,0-18.63,22.64c-2.43,3.28-.51,8.34,2.69,10.26,3.79,2.27,7.86.55,10.26-2.69h0Z" transform="translate(-225.26 -76.67)"/><path class="cls-8" d="M473.48,804.09c0.29,6.59,4.19,11.23,7.31,16.75,3.73,6.6,2.37,14.37,5.33,21.25,0.72,1.68,3.57,1.6,4.32,0,3.07-6.59,4.66-14.9,2.63-22.06-1.43-5-5.86-11.26-11.71-11a2.56,2.56,0,0,0-2.41,1.84c-0.6,2.34.4,3.34,1.71,5.26a35.11,35.11,0,0,1,5,10.5l4.82-1.33a93.31,93.31,0,0,0-10.81-21.95c-0.94-1.4-3.49-1.84-4.32,0-2.1,4.65.81,7.93,3,12a49.5,49.5,0,0,1,5.82,20.37c0.23,3.18,5.13,3.24,5,0a74.7,74.7,0,0,1,.11-8.9c0.17-2.14.45-4.28,0.83-6.4l0.34-1.75q0.47-2.9.38-1.18c0.24,0.13,1.49,2,2.15,2.56a17.37,17.37,0,0,0,2.38,1.57,23.76,23.76,0,0,0,6.93,2.45,46.29,46.29,0,0,0,7.87.69,33.48,33.48,0,0,0,4.79,0c2.47-.31,1.25-0.34-0.48-0.38-5.59-.14-10.72-2.84-16.39-2.69-2.73.07-3.5,4.27-.66,4.91,3.72,0.85,7.42,1.79,11.07,2.9,3.07,0.93,10.4,2.22,11.49,5.73l2.41-3.16c-3.9.07-16.95,0.48-18.14-4.92l-3.67,2.82,8.38,4c2.41,1.16,6.52,2.21,7.71,4.85l1.49-3.67c-3.55,1-7.27-4.19-11.41-3.69a2.55,2.55,0,0,0-2.41,3.16,44.46,44.46,0,0,1-.38,20.71l4.91,0.66a91.32,91.32,0,0,0-2-21l-4.18,2.43c3,3.06,3.49,8.39,4,12.43a66.33,66.33,0,0,1,.24,12.88c-0.23,3.23,4.72,3.17,5,0l2.93-33.1h-5c1.35,13.91,1.78,28.52-7.15,40.17l4.57,1.93a193.28,193.28,0,0,0,6-22.18q1.11-5.41,1.91-10.87c0.55-3.79.69-7.66,2.86-10.95l-4.66-1.26a43.93,43.93,0,0,1-5.06,26.27L513,854l1.73-1.84,0.37,1.69c0.79,1.38.63,3.82,0.76,5.33a57.19,57.19,0,0,1,.08,7.78c-0.13,2.7,3.33,3.1,4.66,1.26a150.61,150.61,0,0,0,15-25.79L531,841.12c-0.86,9.32-5.4,17.47-9.94,25.46l4.57,1.93c1.45-4.12,5.49-22.39,11.29-21.52l-1.84-2.41c0.2,8-8.3,13.55-10.22,21.12-0.72,2.83,3,4.24,4.57,1.93,4.78-7,5-16.9,11.62-22.6,2.45-2.09-1.1-5.62-3.54-3.54-7.17,6.13-7.32,16.14-12.4,23.61l4.57,1.93c2.1-8.28,10.62-13.34,10.4-22.45a2.53,2.53,0,0,0-1.84-2.41c-4.89-.73-8.43,1.76-10.61,6.1-2.95,5.88-4.64,12.71-6.83,18.91-1,2.7,3.19,4.36,4.57,1.93,5-8.84,9.68-17.71,10.62-28,0.22-2.42-3.64-3.48-4.66-1.26a150.61,150.61,0,0,1-15,25.79l4.66,1.26a58.2,58.2,0,0,0-.7-12.73c-0.41-2.38-.71-5.46-2.79-7-5.09-3.82-8.93,2.45-9.45,6.8-0.3,2.52,3.54,3.32,4.66,1.26a48.62,48.62,0,0,0,5.74-28.79,2.52,2.52,0,0,0-4.66-1.26c-3.92,5.94-3.58,14.4-4.91,21.21a192.7,192.7,0,0,1-6.38,24c-1,2.92,3,4,4.57,1.93,9.43-12.3,9.27-28,7.84-42.69a2.5,2.5,0,0,0-5,0l-2.93,33.1h5c0.61-8.72.92-22.11-5.69-28.85-1.83-1.86-4.68.08-4.18,2.43a85.42,85.42,0,0,1,1.83,19.7c-0.06,2.81,4.22,3.41,4.91.66a50.36,50.36,0,0,0,.38-23.37l-2.41,3.16c4.7-.58,7.54,5,12.74,3.51a2.54,2.54,0,0,0,1.49-3.67c-1.24-2.74-3.56-3.76-6.15-5-3.9-1.91-7.82-3.77-11.73-5.66a2.53,2.53,0,0,0-3.67,2.82c1.93,8.68,16.11,8.72,23,8.59a2.52,2.52,0,0,0,2.41-3.16c-1.25-4.05-4.51-5.63-8.29-7a145.8,145.8,0,0,0-17.76-5.11l-0.66,4.91c7.22-.18,16.64,5.75,23.4,1,2-1.38,2.62-3.54,1.25-5.58-2.14-3.17-7.51-2.3-10.66-2.31-5.39,0-11.27-.12-15.77-3.51-2.23-1.68-4.43-5.3-7.75-3.93-3,1.24-3.15,5.85-3.57,8.52a75.67,75.67,0,0,0-.82,14.87h5a54.1,54.1,0,0,0-5.69-21.35c-0.93-1.84-4.78-6.37-3.83-8.48h-4.32a88.32,88.32,0,0,1,10.31,20.75c1,3,5.71,1.8,4.82-1.33a39.71,39.71,0,0,0-2.78-7.26c-0.44-.87-4.09-5.34-4-5.84L481.35,814c5.21-.2,7.34,7.63,7.52,11.5a30.21,30.21,0,0,1-2.75,14.09h4.32c-2.57-6-1.33-12.76-4.05-18.76-2.53-5.59-7.63-10.31-7.9-16.72-0.14-3.21-5.14-3.22-5,0h0Z" transform="translate(-225.26 -76.67)"/><path class="cls-8" d="M501.7,857.54c-1.41,12.42-2.82,24.87-3.2,37.37-0.37,12.07.26,24.18,0.59,36.24,0.07,2.68,4.46,3.56,4.91.66,0.89-5.68-.29-10.73-1.92-16.18A68.24,68.24,0,0,1,499.32,896c0-2.91-.16-5.9.85-8.68s3-5.54,4.63-8.13l5.38-8.74c0.93-1.5,3.77-8,5.6-8.08l-2.16-3.76L496.72,896l4.57,1.93,10-38.54-4.91-.66a73.09,73.09,0,0,1-5.29,21l4.82,1.33a29.61,29.61,0,0,1,11-14.5l-3.76-2.16c-1.51,12.48-11.79,21.73-13,34.43-0.27,2.78,4.4,3.43,4.91.66a61.38,61.38,0,0,1,16.2-31.78l-3.93-3c-7.76,16.73-21.81,32.82-16.83,52.53,0.71,2.82,4.77,2.08,4.91-.66,0.87-16.78,4.58-35,18.93-45.53l-3.67-2.82c-2.38,7-7.75,12.82-11,19.45a86.25,86.25,0,0,0-6.78,19.15c-0.72,3.13,4.1,4.47,4.82,1.33a80.45,80.45,0,0,1,7.87-21c3.27-5.94,7.76-11.12,10-17.61,0.66-2-1.91-4.12-3.67-2.82-15.92,11.73-20.43,31.06-21.41,49.84l4.91-.66c-4.55-18,9.25-33.41,16.33-48.68,1.13-2.43-1.83-5.21-3.93-3a66.05,66.05,0,0,0-17.48,34l4.91,0.66c1.22-12.5,11.51-21.85,13-34.43,0.22-1.84-2.31-3.18-3.76-2.16a35.39,35.39,0,0,0-13.3,17.49c-1.1,3.08,3.63,4.23,4.82,1.33a77.54,77.54,0,0,0,5.47-22.3c0.27-2.84-4.22-3.35-4.91-.66l-10,38.54c-0.68,2.63,3.37,4.59,4.57,1.93l16.9-37.43c0.72-1.6-.09-3.87-2.16-3.76-5.72.31-8.28,7.89-10.9,12.14-3.42,5.55-8.4,11.54-10,18-1.47,5.92-.77,13.25,0,19.21,1,7.93,5.58,15.72,4.31,23.82l4.91,0.66c-0.33-12.07-1-24.17-.59-36.24,0.39-12.51,1.8-24.95,3.2-37.37,0.36-3.19-4.64-3.17-5,0h0Z" transform="translate(-225.26 -76.67)"/><path class="cls-9" d="M510.35,730.17a97,97,0,0,0-21.26,13.94,42,42,0,0,0-6,6.07,46.87,46.87,0,0,0-6,11.57c-3.31,8.39-6,18-2.17,26.19a42,42,0,0,0,3,5.12,147,147,0,0,1,10.43,19c3,6.5,5.43,14.25,2.09,20.57a17.79,17.79,0,0,0,7-9.7A38.37,38.37,0,0,0,499,810.81a24.92,24.92,0,0,1,5.84,14.38,54.42,54.42,0,0,1-1.24,15.68" transform="translate(-225.26 -76.67)"/><path class="cls-9" d="M503.41,840.86c-2.64,11.5-5.29,23.16-4.85,34.95s4.36,23.92,13.05,31.9c-5.46-7.84-6-18.3-3.59-27.55s7.35-17.59,12.26-25.79l8.25-13.78c5.79-9.68,11.61-19.41,15.83-29.87s6.81-21.77,5.86-33a55,55,0,0,0-20.48-38" transform="translate(-225.26 -76.67)"/><path class="cls-9" d="M509.93,729.85l5.18,2.28a29.21,29.21,0,0,0,2.83,1.13c1.39,0.44,2.84.68,4.19,1.2a21.38,21.38,0,0,1,6.33,4.41" transform="translate(-225.26 -76.67)"/><path class="cls-9" d="M479.81,767.52A189,189,0,0,1,493.3,751.2a8,8,0,0,0-8.81,5,33.45,33.45,0,0,1,11.87-11.75,66.59,66.59,0,0,1,8-3.73l5.92-2.46a3.78,3.78,0,0,1,4.09.18l11.29,5.66a11.91,11.91,0,0,1,3.4,2.23c1.1,1.15,1.69,2.69,2.6,4a40.22,40.22,0,0,0,3.69,3.92c3,3.26,4.69,7.51,6.28,11.66,1.87,4.89,3.73,9.88,4.15,15.1s-0.77,10.8-4.34,14.64c-2.71-6.15-3.39-13-4.52-19.59s-2.85-13.44-7.18-18.59a30.59,30.59,0,0,0-7.37-6.12c-5.07-3.15-11.24-5.43-17-3.76-3.78,1.1-6.86,3.76-10,6.13-4,3-8.21,5.65-11.73,9.16s-6.31,8.07-6.42,13a14,14,0,0,0,5.64,11.42,41.85,41.85,0,0,1,1.15-10.6c2.85-9.95,12.71-16.43,22.71-19.07,5.77-1.53,12.56-1.85,17,2.1a15.21,15.21,0,0,1,4.49,8.82,58.75,58.75,0,0,1,.52,10.06,131.48,131.48,0,0,0,1.71,20.28A1.52,1.52,0,0,0,531,800a1.28,1.28,0,0,0,.89.08c2.25-.42,3.72-2.79,3.84-5.08a13.47,13.47,0,0,0-1.85-6.53,94.73,94.73,0,0,0-14.77-20.83c-3.56-3.94-7.85-8-13.15-8.2a13.76,13.76,0,0,0-8.58,2.88,23.49,23.49,0,0,0-8.23,12.35,46.73,46.73,0,0,0-1.53,15c0.51-5.89,1.47-12.57,6.37-15.88a17.34,17.34,0,0,1,7.49-2.38,20.29,20.29,0,0,1,9.23.4c4.55,1.55,7.8,5.75,9.39,10.28s1.8,9.42,2,14.22a58,58,0,0,0-17.23-32.24,3.52,3.52,0,0,0-1.43-1,2.5,2.5,0,0,0-2.6,1.27,8,8,0,0,0-.87,3,61.27,61.27,0,0,1-10.75,25.76c3.49-4.3,7.19-8.76,12.31-10.87a6.62,6.62,0,0,1,4.76-.44,7.2,7.2,0,0,1,2.85,2.33,29.5,29.5,0,0,1,5.44,10.09l-7.49-1.81c-2.32-.56-4.74-1.12-7.07-0.63s-4.56,2.37-4.63,4.76a129.77,129.77,0,0,1,30.26,6.25c2.82,0.94,5.7,2,8.67,1.84s6.09-1.88,6.85-4.75a31.22,31.22,0,0,0-5,11.2,3.8,3.8,0,0,0,3.16-3.58c-2.23,2.2-3.12,5.37-4.2,8.31s-2.65,6-5.52,7.28c-3-3.92.45-10.39-2.67-14.22a8.43,8.43,0,0,0-4.93-2.54c-5.06-1.08-10.38-.47-15.41-1.69-4-1-7.55-3-11.09-5a19.68,19.68,0,0,1-5.68-4.24c-1.3-1.58-2.39-3.75-4.42-4a61.4,61.4,0,0,1,18.64,3c-3.54-1.56-7.14-3.15-10.13-5.61s-5.34-6-5.55-9.83c-0.08-1.47.26-3.14,1.5-3.94a4.86,4.86,0,0,1,3.52-.33c11.26,2.06,19.93,11.5,24.77,21.88a39.43,39.43,0,0,1,3.92,14c0.33,4.93-.61,9.86-1.54,14.71l-2.86,14.87c-0.13.66-.8,1.5-1.25,1" transform="translate(-225.26 -76.67)"/><path class="cls-9" d="M483.9,797c-0.08,5.7,5.2,10,7,15.38,1.37,4.22.57,9,2.54,13a22.89,22.89,0,0,0,2.24-8.09,18.64,18.64,0,0,0-.79-8.66,9.63,9.63,0,0,0-6-6,0.92,0.92,0,0,0-.78,0c-0.43.31-.1,1,0.24,1.4a25.2,25.2,0,0,1,5,9.75,65.68,65.68,0,0,0-8.16-16.5c-1.1,1.44,0,3.46,1,5a39.41,39.41,0,0,1,6.13,19,52.85,52.85,0,0,1,1.37-15,1.92,1.92,0,0,1,.61-1.18c0.86-.61,1.91.39,2.6,1.19,2.26,2.61,5.73,3.88,9.15,4.34s6.9,0.2,10.35.31c1.24,0,2.95.86,2.39,2a1.67,1.67,0,0,1-.74.66c-5.06,2.77-11.16-1.61-16.91-1.16a114,114,0,0,1,14.36,4.18c1.93,0.7,4.13,1.8,4.42,3.84a36.68,36.68,0,0,1-11.52-1.4c-2-.57-4.28-1.75-4.36-3.83l10.36,5c1.17,0.57,2.48,1.29,2.76,2.56-3.09,1.37-6.06-3.64-9.33-2.78a34.38,34.38,0,0,1-.3,17,62.54,62.54,0,0,0-1.48-15.74c1.47,1.2,2.11,3.13,2.56,5a48.93,48.93,0,0,1,1.27,16L512,816.74a74.36,74.36,0,0,1,.26,16.67,30.17,30.17,0,0,1-6,15.34,143.53,143.53,0,0,0,6.42-27.64c0.31-2.39.61-4.92,2.11-6.81a34.46,34.46,0,0,1-4.18,21.27,5.08,5.08,0,0,1,1.17-3.34A2.35,2.35,0,0,1,515,832a3.42,3.42,0,0,1,.74,1.65,40.17,40.17,0,0,1,1,11.94,109.9,109.9,0,0,0,11.62-19.93c-0.49,7.42-4.26,14.18-7.94,20.64l4.13-11.71a13.67,13.67,0,0,1,2.33-4.62,4.65,4.65,0,0,1,4.64-1.64c0.55,6.3-6.72,10.64-8,16.84,4-5.47,3.92-13.69,9.28-17.85" transform="translate(-225.26 -76.67)"/><path class="cls-9" d="M505.71,838.33c-1.23,10.83-2.46,21.69-2.55,32.59,0,3.82.07,7.64,0.18,11.46l0.35,12.83c1.16-5.41-1.6-10.8-2.79-16.21a57.74,57.74,0,0,1-.9-12.36,14.65,14.65,0,0,1,3-10.13l9.07-14.74c0.59-1,1.54-2,2.59-1.67L501.6,869l7.7-29.78A53.93,53.93,0,0,1,505.14,856a23.9,23.9,0,0,1,9.39-12.36c-0.84,9.52-9.45,17.06-10.07,26.6a47.84,47.84,0,0,1,13-25.4c-2.89,6.42-7,12.25-9.94,18.63s-4.82,13.7-2.87,20.47c0.32-6.9,1.19-13.85,3.57-20.34s6.36-12.53,12-16.5c-1,3.38-3.19,6.23-5.11,9.17a61.93,61.93,0,0,0-8.66,20.65" transform="translate(-225.26 -76.67)"/><path class="cls-9" d="M509.79,739c5.33-.63,12.5,5,17.13,7.43a2.53,2.53,0,0,0,3.67-1.49c0.88-3.66-1.15-6.52-4.51-7.94-2.54-1.08-5.21-1.5-7.73-2.74-1.23-.61-2.42-1.31-3.62-2l-1.13-.62q-1.92-1.34-.59.09l-3.08,3.08a69,69,0,0,1,10.48,4.65,29.7,29.7,0,0,1,4.5,3c0.84,0.71,3.15,4.19,3.93,2.88-1.65,2.77,2.67,5.29,4.32,2.52,2.15-3.62-3.6-8.12-6-10-4.71-3.64-10.34-5.91-15.89-7.94a2.52,2.52,0,0,0-3.08,3.08c0.88,2.58,4.06,3.55,6.29,4.75,1.87,1,11.72,4,11.3,5.77l3.67-1.49c-5.57-3-13-8.9-19.65-8.11-3.16.38-3.19,5.38,0,5h0Z" transform="translate(-225.26 -76.67)"/><path class="cls-9" d="M530.12,748.86c3.22,0,3.22-5,0-5s-3.22,5,0,5h0Z" transform="translate(-225.26 -76.67)"/><path class="cls-9" d="M505.68,746.56l-0.31,39.6h5c0-7.6.22-15.19,0.73-22.78q0.37-5.44.92-10.86c0.39-3.87.24-9.2,2.08-12.67l-4.66-1.26-2.69,53.65c-0.16,3.24,4.74,3.17,5,0,1-11.87,2.09-23.7,6-35l-4.91-.66q0.7,18.56.29,37.12h5l-0.08-16.52c0-2.85.55-6.33-2.38-7.89a2.54,2.54,0,0,0-3.67,1.49c-2,6.38-2.17,12.92-2.2,19.55h5c-0.13-7.41,5.84-13.43,6.48-20.86,0.64-7.61-2.27-14.88-5.31-21.68-1.21-2.71-5.12-.7-4.57,1.93,2.23,10.67,4.9,21.36,6.1,32.2,0.34,3.12,5.12,3.28,5,0a152.62,152.62,0,0,1,.63-21.28c0.23-2.23.78-4.56,0-6.71s-3-3.54-4.16-5.61l-4.32,2.52q5.36,7.5,10.23,15.32c1.39,2.23,4.41,1.13,4.66-1.26,0.37-3.55.33-7.68-1.17-11-1.68-3.75-5-1.9-7.3-5.13-1.37-2-4.64-1.36-4.66,1.26-0.09,11.23-.18,22.47-0.75,33.69-0.27,5.45-.66,10.89-1.21,16.31-0.51,5.06-.77,16.34-8.11,16a2.51,2.51,0,0,0-2.5,2.5,93.09,93.09,0,0,1,.59,18.6l3.76-2.16-0.49-.25,1.15,2.82,0.11-.54c0.64-3.14-4.18-4.49-4.82-1.33l-0.11.54a2.56,2.56,0,0,0,1.15,2.82l0.49,0.25a2.53,2.53,0,0,0,3.76-2.16,93.09,93.09,0,0,0-.59-18.6l-2.5,2.5c12.64,0.52,12.83-17.19,13.56-25.83,1.27-15,1.39-30.13,1.52-45.21l-4.66,1.26c1.67,2.39,3.16,2.76,5.51,4.18,1.39,0.84,1.61.47,2.09,2.5a20.58,20.58,0,0,1,.2,6.93l4.66-1.26q-4.88-7.82-10.23-15.32c-1.84-2.57-6-.32-4.32,2.52,0.92,1.6,3.07,3,3.7,4.55,0.84,2.12-.27,5.79-0.46,8a153.73,153.73,0,0,0-.37,18.51h5c-1.25-11.31-3.95-22.41-6.28-33.53l-4.57,1.93c3.22,7.21,6.37,15.41,3.69,23.3-2,5.77-5.65,10.38-5.54,16.72,0.06,3.21,5,3.22,5,0,0-6.19.2-12.25,2-18.22l-3.67,1.49c0.36,0.19-.07,7.67-0.07,9.08l0.05,11c0,3.22,4.93,3.22,5,0q0.42-18.57-.29-37.12a2.51,2.51,0,0,0-4.91-.66c-4.09,11.73-5.21,24-6.21,36.35h5l2.69-53.65c0.12-2.46-3.52-3.43-4.66-1.26-3.26,6.18-2.84,15.29-3.38,22.11-0.71,8.89-1,17.81-1,26.73,0,3.22,5,3.22,5,0l0.31-39.6c0-3.22-5-3.22-5,0h0Z" transform="translate(-225.26 -76.67)"/></svg>'], {type: 'image/svg+xml;charset=utf-8'});
var ship_url = DOMURL.createObjectURL(ship);
//explosion
var explosion_img = new Image();
var explosion = new Blob(['<svg id="Explosion" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 284.13 215.71"><defs><style>.cls-1{fill:#c13b2c;}.cls-2{fill:#e97524;}.cls-3{fill:#edc91d;}.cls-4{fill:#ecf0f1;}</style></defs><title>pew_js_texture_explosion</title><polygon class="cls-1" points="41.92 0 0 92.33 32.61 85.29 0 144.29 60.55 121 72.97 215.71 124.21 158.77 158.37 215.71 190.98 147.4 256.19 200.19 256.19 133.42 284.13 148.95 273.27 0 41.92 0"/><polygon class="cls-2" points="52.79 0 12.42 79.39 52.79 74.42 12.42 136.53 77.63 107.03 77.63 190.87 130.42 144.29 158.37 200.19 189.42 127.21 256.19 184.66 243.77 113.24 267.06 130.32 260.85 0 52.79 0"/><polygon class="cls-3" points="69.87 0 32.61 69.76 69.87 54.24 32.61 125.66 85.4 91.5 85.4 178.45 130.42 125.66 164.58 184.66 186.32 103.92 242.21 169.13 232.9 79.39 256.19 121 249.98 0 69.87 0"/><polygon class="cls-4" points="97.82 0 239.11 0 256.19 107 214.26 39.16 226.69 144.49 184.76 72.24 163.03 158.77 144.4 79.39 97.82 158.77 110.24 60.58 60.55 96.28 97.82 0"/></svg>'], {type: 'image/svg+xml;charset=utf-8'})
var explosion_url = DOMURL.createObjectURL(explosion);



//ship style
ship_img.style.width = WIDTH/10+'px';
ship_img.style.height = 'auto';
ship_img.style.margin = 'auto';
ship_img.style.display = 'block'
ship_img.style.zIndex = '10000';
ship_img.style.position= 'fixed';
ship_img.style.left = 0;
ship_img.style.right = 0;
ship_img.style.top = 0;
ship_img.style.bottom = 0;
ship_img.style.paddingTop = TOTAL_FRAME/2+'px';
ship_img.src = ship_url;
document.body.appendChild(ship_img);

//explosion style
explosion_img.style.width = WIDTH/10+'px';
explosion_img.style.height = 'auto';
explosion_img.style.margin = 'auto';
explosion_img.style.display = 'none'
explosion_img.style.zIndex = '10001';
explosion_img.style.position= 'fixed';
explosion_img.style.left = 0;
explosion_img.style.right = 0;
explosion_img.style.top = 0;
explosion_img.style.bottom = 0;
explosion_img.style.paddingBottom = TOTAL_FRAME/2-EXPLOSION_OFFSET+'px';
explosion_img.src = explosion_url;
document.body.appendChild(explosion_img);


//animation
animation();


function animation() {
  var limit = TOTAL_FRAME;
  var count = 0;
  var add = setInterval(function () {
    if (count<MIDPOINT) {
      ship_img.style.paddingTop = (TOTAL_FRAME/2-count)+'px';
    } else {
      ship_img.style.paddingTop = 0;
      ship_img.style.paddingBottom = (count-TOTAL_FRAME/2)+'px';
    }
    count += STEP;
    if(count > limit) {
      explosion_img.style.display='block';
      ship_img.style.display='none';
      clearInterval(add);
    }
  },REFRESH_SPEED);
}


(1+TOTAL_FRAME/STEP)*REFRESH_SPEED+EXPLOSION_TIME
