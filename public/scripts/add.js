const body = document.querySelector('body');

const popUp = "<!-- Popup for settings -->\n" +
    "<div id='box'></div>" +
    "<div class=\"popup-overlay\" id=\"popup\">\n" +
    "    <div class=\"popup\">\n" +
    "        <h2>선물 목록</h2>\n" +
    "\n" +
    "        <div class=\"gift-list\" id=\"gift-list\">\n" +
    "            <!-- Gifts will be listed here -->\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"input-form\">\n" +
    "            <input type=\"text\" id=\"gift-input\" placeholder=\"선물 이름을 입력하세요\">\n" +
    "            <button onclick=\"addGift()\">선물 추가하기</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <button class=\"close-btn\" onclick=\"closePopup()\">닫기</button>\n" +
    "    </div>\n" +
    "</div>";

body.innerHTML += popUp;