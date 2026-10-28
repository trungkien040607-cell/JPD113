// --- 1. HỆ THỐNG PHÁT ÂM (WEB SPEECH API) ---
function playAudio(text) {
    if (!text) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.75;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Trình duyệt không hỗ trợ phát âm.");
    }
}

// --- 2. DỮ LIỆU BẢNG CHỮ CÁI ---
const rowLabelsSeion = ["Hàng あ (a)", "Hàng か (ka)", "Hàng さ (sa)", "Hàng た (ta)", "Hàng な (na)", "Hàng は (ha)", "Hàng ま (ma)", "Hàng や (ya)", "Hàng ら (ra)", "Hàng わ (wa)", "Hàng ん (n)"];
const rowLabelsDakuon = ["Hàng が (ga)", "Hàng ざ (za)", "Hàng だ (da)", "Hàng ば (ba)", "Hàng ぱ (pa)"];
const rowLabelsYoon = ["Hàng きゃ (kya)", "Hàng しゃ (sha)", "Hàng ちゃ (cha)", "Hàng にゃ (nya)", "Hàng ひゃ (hya)", "Hàng みゃ (mya)", "Hàng りゃ (rya)", "Hàng ぎゃ (gya)", "Hàng じゃ (ja)", "Hàng びゃ (bya)", "Hàng ぴゃ (pya)"];

const hiraganaSeion = [
    ["あ (a)", "い (i)", "う (u)", "え (e)", "お (o)"],
    ["か (ka)", "き (ki)", "く (ku)", "け (ke)", "こ (ko)"],
    ["さ (sa)", "し (shi)", "す (su)", "せ (se)", "そ (so)"],
    ["た (ta)", "ち (chi)", "つ (tsu)", "て (te)", "と (to)"],
    ["な (na)", "に (ni)", "ぬ (nu)", "ね (ne)", "の (no)"],
    ["は (ha)", "ひ (hi)", "ふ (fu)", "へ (he)", "ほ (ho)"],
    ["ま (ma)", "み (mi)", "む (mu)", "め (me)", "も (mo)"],
    ["や (ya)", "", "ゆ (yu)", "", "よ (yo)"],
    ["ら (ra)", "り (ri)", "る (ru)", "れ (re)", "ろ (ro)"],
    ["わ (wa)", "", "", "", "を (wo)"],
    ["ん (n)", "", "", "", ""]
];

const hiraganaDakuon = [
    ["が (ga)", "ぎ (gi)", "ぐ (gu)", "げ (ge)", "ご (go)"],
    ["ざ (za)", "じ (ji)", "ず (zu)", "ぜ (ze)", "ぞ (zo)"],
    ["だ (da)", "ぢ (ji)", "づ (zu)", "で (de)", "ど (do)"],
    ["ば (ba)", "び (bi)", "ぶ (bu)", "べ (be)", "ぼ (bo)"],
    ["ぱ (pa)", "ぴ (pi)", "ぷ (pu)", "ぺ (pe)", "ぽ (po)"]
];

const hiraganaYoon = [
    ["きゃ (kya)", "きゅ (kyu)", "きょ (kyo)"],
    ["しゃ (sha)", "しゅ (shu)", "しょ (sho)"],
    ["ちゃ (cha)", "ちゅ (chu)", "ちょ (cho)"],
    ["にゃ (nya)", "にゅ (nyu)", "にょ (nyo)"],
    ["ひゃ (hya)", "ひゅ (hyu)", "ひょ (hyo)"],
    ["みゃ (mya)", "みゅ (myu)", "みょ (myo)"],
    ["りゃ (rya)", "りゅ (ryu)", "りょ (ryo)"],
    ["ぎゃ (gya)", "ぎゅ (gyu)", "ぎょ (gyo)"],
    ["じゃ (ja)", "じゅ (ju)", "じょ (jo)"],
    ["びゃ (bya)", "びゅ (byu)", "びょ (byo)"],
    ["ぴゃ (pya)", "ぴゅ (pyu)", "ぴょ (pyo)"]
];

const katakanaSeion = [
    ["ア (a)", "イ (i)", "ウ (u)", "エ (e)", "オ (o)"],
    ["カ (ka)", "キ (ki)", "ク (ku)", "ケ (ke)", "コ (ko)"],
    ["サ (sa)", "シ (shi)", "ス (su)", "セ (se)", "ソ (so)"],
    ["タ (ta)", "チ (chi)", "ツ (tsu)", "テ (te)", "ト (to)"],
    ["ナ (na)", "ニ (ni)", "ヌ (nu)", "ネ (ne)", "ノ (no)"],
    ["ハ (ha)", "ヒ (hi)", "フ (fu)", "ヘ (he)", "ホ (ho)"],
    ["マ (ma)", "ミ (mi)", "ム (mu)", "メ (me)", "モ (mo)"],
    ["ヤ (ya)", "", "ユ (yu)", "", "ヨ (yo)"],
    ["ラ (ra)", "リ (ri)", "ル (ru)", "レ (re)", "ロ (ro)"],
    ["ワ (wa)", "", "", "", "ヲ (wo)"],
    ["ン (n)", "", "", "", ""]
];

const katakanaDakuon = [
    ["ガ (ga)", "ギ (gi)", "グ (gu)", "ゲ (ge)", "ゴ (go)"],
    ["ザ (za)", "ジ (ji)", "ズ (zu)", "ゼ (ze)", "ゾ (zo)"],
    ["ダ (da)", "ヂ (ji)", "ヅ (zu)", "デ (de)", "ド (do)"],
    ["バ (ba)", "ビ (bi)", "ブ (bu)", "ベ (be)", "ボ (bo)"],
    ["パ (pa)", "ピ (pi)", "プ (pu)", "ペ (pe)", "ポ (po)"]
];

const katakanaYoon = [
    ["キャ (kya)", "キュ (kyu)", "キョ (kyo)"],
    ["シャ (sha)", "シュ (shu)", "ショ (sho)"],
    ["チャ (cha)", "チュ (chu)", "チョ (cho)"],
    ["ニャ (nya)", "ニュ (nyu)", "ニョ (nyo)"],
    ["ヒャ (hya)", "ヒュ (hyu)", "ヒョ (hyo)"],
    ["ミャ (mya)", "ミュ (myu)", "ミョ (myo)"],
    ["リャ (rya)", "リュ (ryu)", "リョ (ryo)"],
    ["ギャ (gya)", "ギュ (gyu)", "ギョ (gyo)"],
    ["ジャ (ja)", "ジュ (ju)", "ジョ (jo)"],
    ["びゃ (bya)", "びゅ (byu)", "びょ (byo)"],
    ["ぴゃ (pya)", "ぴゅ (pyu)", "ぴょ (pyo)"]
];

function renderKanaTable(dataArray, labelArray, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    tbody.innerHTML = "";
    dataArray.forEach((row, rowIndex) => {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.className = "table-light text-secondary small fw-bold";
        th.innerText = labelArray[rowIndex];
        tr.appendChild(th);

        row.forEach(cell => {
            let td = document.createElement("td");
            if (cell) {
                let parts = cell.split(" ");
                let char = parts[0];
                let romaji = parts[1] ? parts[1].replace(/[()]/g, '') : '';
                td.innerHTML = `<span class="kana-char">${char}</span><span class="kana-romaji">${romaji}</span>`;
                td.onclick = () => playAudio(char);
            } else {
                td.className = "bg-light";
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

function renderYoonTable(dataArray, labelArray, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    tbody.innerHTML = "";
    dataArray.forEach((row, rowIndex) => {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.className = "table-light text-secondary small fw-bold";
        th.innerText = labelArray[rowIndex];
        tr.appendChild(th);

        row.forEach(cell => {
            let td = document.createElement("td");
            if (cell) {
                let parts = cell.split(" ");
                let char = parts[0];
                let romaji = parts[1] ? parts[1].replace(/[()]/g, '') : '';
                td.innerHTML = `<span class="kana-char">${char}</span><span class="kana-romaji">${romaji}</span>`;
                td.onclick = () => playAudio(char);
            } else {
                td.className = "bg-light";
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

renderKanaTable(hiraganaSeion, rowLabelsSeion, 'h-seion');
renderKanaTable(hiraganaDakuon, rowLabelsDakuon, 'h-dakuon');
renderYoonTable(hiraganaYoon, rowLabelsYoon, 'h-yoon');

renderKanaTable(katakanaSeion, rowLabelsSeion, 'k-seion');
renderKanaTable(katakanaDakuon, rowLabelsDakuon, 'k-dakuon');
renderYoonTable(katakanaYoon, rowLabelsYoon, 'k-yoon');

document.getElementById('hiraganaRadio').addEventListener('change', () => {
    document.getElementById('hiraganaContainer').classList.remove('d-none');
    document.getElementById('katakanaContainer').classList.add('d-none');
});
document.getElementById('katakanaRadio').addEventListener('change', () => {
    document.getElementById('katakanaContainer').classList.remove('d-none');
    document.getElementById('hiraganaContainer').classList.add('d-none');
});


// --- 3. KHO TỪ VỰNG TOÀN DIỆN (ĐẦY ĐỦ KHÔNG THIẾU BẤT KỲ TỪ NÀO) ---
const vocabData = [
    // 1. Thông tin & Con người
    { category: "Thông tin & Con người", kana: "わたし", kanji: "私", romaji: "watashi", meaning: "Tôi" },
    { category: "Thông tin & Con người", kana: "わたしたち", kanji: "私達", romaji: "watashitachi", meaning: "Chúng tôi, chúng ta" },
    { category: "Thông tin & Con người", kana: "あなた", kanji: "貴方", romaji: "anata", meaning: "Bạn, anh/chị" },
    { category: "Thông tin & Con người", kana: "あのひと", kanji: "あの人", romaji: "anohito", meaning: "Người kia, người đó" },
    { category: "Thông tin & Con người", kana: "おなまえ", kanji: "お名前", romaji: "onamae", meaning: "Tên" },
    { category: "Thông tin & Con người", kana: "だれ", kanji: "何方", romaji: "dare", meaning: "Ai" },

    // 2. Quốc gia & Ngôn ngữ
    { category: "Quốc gia & Ngôn ngữ", kana: "おくに", kanji: "お国", romaji: "okuni", meaning: "Quốc gia, đất nước" },
    { category: "Quốc gia & Ngôn ngữ", kana: "にほん", kanji: "日本", romaji: "nihon", meaning: "Nhật Bản" },
    { category: "Quốc gia & Ngôn ngữ", kana: "にほんご", kanji: "日本語", romaji: "nihongo", meaning: "Tiếng Nhật" },
    { category: "Quốc gia & Ngôn ngữ", kana: "ベトナム", kanji: "越南", romaji: "betonamu", meaning: "Việt Nam" },
    { category: "Quốc gia & Ngôn ngữ", kana: "アメリカ", kanji: "米国", romaji: "amerika", meaning: "Hoa Kỳ, Mỹ" },
    { category: "Quốc gia & Ngôn ngữ", kana: "イタリア", kanji: "伊太利加", romaji: "itaria", meaning: "Ý" },
    { category: "Quốc gia & Ngôn ngữ", kana: "オーストラリア", kanji: "豪州", romaji: "ousutaria", meaning: "Úc" },
    { category: "Quốc gia & Ngôn ngữ", kana: "かんこく", kanji: "韓国", romaji: "kankoku", meaning: "Hàn Quốc" },
    { category: "Quốc gia & Ngôn ngữ", kana: "ちゅうごく", kanji: "中国", romaji: "chuugoku", meaning: "Trung Quốc" },
    { category: "Quốc gia & Ngôn ngữ", kana: "ロシア", kanji: "露西亜", romaji: "roshia", meaning: "Nga" },
    { category: "Quốc gia & Ngôn ngữ", kana: "タイ", kanji: "泰", romaji: "tai", meaning: "Thái Lan" },
    { category: "Quốc gia & Ngôn ngữ", kana: "ブラジル", kanji: "伯剌西爾", romaji: "burajiru", meaning: "Brazil" },
    { category: "Quốc gia & Ngôn ngữ", kana: "イギリス", kanji: "英国", romaji: "igirisu", meaning: "Anh" },
    { category: "Quốc gia & Ngôn ngữ", kana: "フランス", kanji: "仏国", romaji: "furansu", meaning: "Pháp" },
    { category: "Quốc gia & Ngôn ngữ", kana: "ドイツ", kanji: "独逸", romaji: "doitsu", meaning: "Đức" },

    // 3. Nghề nghiệp
    { category: "Nghề nghiệp", kana: "おしごと", kanji: "お仕事", romaji: "oshigoto", meaning: "Nghề nghiệp" },
    { category: "Nghề nghiệp", kana: "せんせい", kanji: "先生", romaji: "sensei", meaning: "Giáo viên, thầy/cô" },
    { category: "Nghề nghiệp", kana: "きょうし", kanji: "教師", romaji: "kyoushi", meaning: "Giáo viên (nghề nghiệp)" },
    { category: "Nghề nghiệp", kana: "がくせい", kanji: "学生", romaji: "gakusei", meaning: "Học sinh, sinh viên" },
    { category: "Nghề nghiệp", kana: "かいしゃいん", kanji: "会社員", romaji: "kaishain", meaning: "Nhân viên công ty" },
    { category: "Nghề nghiệp", kana: "いしゃ", kanji: "医者", romaji: "isha", meaning: "Bác sĩ" },
    { category: "Nghề nghiệp", kana: "ぎんこういん", kanji: "銀行員", romaji: "ginkouin", meaning: "Nhân viên ngân hàng" },
    { category: "Nghề nghiệp", kana: "けんきゅうしゃ", kanji: "研究者", romaji: "kenkyuusha", meaning: "Nhà nghiên cứu" },
    { category: "Nghề nghiệp", kana: "てんいん", kanji: "店員", romaji: "tenin", meaning: "Nhân viên bán hàng" },

    // 4. Đồ vật & Mua sắm
    { category: "Đồ vật & Mua sắm", kana: "これ", kanji: "之", romaji: "kore", meaning: "Cái này, đây" },
    { category: "Đồ vật & Mua sắm", kana: "それ", kanji: "其れ", romaji: "sore", meaning: "Cái đó, đó" },
    { category: "Đồ vật & Mua sắm", kana: "あれ", kanji: "彼れ", romaji: "are", meaning: "Cái kia, kia" },
    { category: "Đồ vật & Mua sắm", kana: "ほん", kanji: "本", romaji: "hon", meaning: "Sách" },
    { category: "Đồ vật & Mua sắm", kana: "じしょ", kanji: "辞書", romaji: "jisho", meaning: "Từ điển" },
    { category: "Đồ vật & Mua sắm", kana: "ざっし", kanji: "雑誌", romaji: "zasshi", meaning: "Tạp chí" },
    { category: "Đồ vật & Mua sắm", kana: "ノート", kanji: "Note", romaji: "no-to", meaning: "Vở, sổ tay" },
    { category: "Đồ vật & Mua sắm", kana: "えんぴつ", kanji: "鉛筆", romaji: "enpitsu", meaning: "Bút chì" },
    { category: "Đồ vật & Mua sắm", kana: "ペン", kanji: "Pen", romaji: "pen", meaning: "Bút" },
    { category: "Đồ vật & Mua sắm", kana: "かばん", kanji: "鞄", romaji: "kaban", meaning: "Cặp sách, túi xách" },
    { category: "Đồ vật & Mua sắm", kana: "ズボン", kanji: "ズボン", romaji: "zubon", meaning: "Quần" },
    { category: "Đồ vật & Mua sắm", kana: "Tシャツ", kanji: "Tシャツ", romaji: "ti-shatsu", meaning: "Áo thun" },
    { category: "Đồ vật & Mua sắm", kana: "とけい", kanji: "時計", romaji: "tokei", meaning: "Đồng hồ" },
    { category: "Đồ vật & Mua sắm", kana: "くるま", kanji: "車", romaji: "kuruma", meaning: "Xe hơi, ô tô" },
    { category: "Đồ vật & Mua sắm", kana: "カメラ", kanji: "Camera", romaji: "kamera", meaning: "Máy ảnh" },
    { category: "Đồ vật & Mua sắm", kana: "けいたいでんわ", kanji: "携帯電話", romaji: "keitaidenwa", meaning: "Điện thoại di động" },
    { category: "Đồ vật & Mua sắm", kana: "でんしじしょ", kanji: "電子辞書", romaji: "denshijisho", meaning: "Kim từ điển" },
    { category: "Đồ vật & Mua sắm", kana: "パソコン", kanji: "PC", romaji: "pasokon", meaning: "Máy tính xách tay" },
    { category: "Đồ vật & Mua sắm", kana: "くつ", kanji: "靴", romaji: "kutsu", meaning: "Giày" },
    { category: "Đồ vật & Mua sắm", kana: "トイレットペーパー", kanji: "Toilet Paper", romaji: "toiretto-pe-pa-", meaning: "Giấy vệ sinh" },

    // 5. Đồ ăn & Thức uống
    { category: "Đồ ăn & Thức uống", kana: "こめ", kanji: "米", romaji: "kome", meaning: "Gạo" },
    { category: "Đồ ăn & Thức uống", kana: "みず", kanji: "水", romaji: "mizu", meaning: "Nước" },
    { category: "Đồ ăn & Thức uống", kana: "さかな", kanji: "魚", romaji: "sakana", meaning: "Cá" },
    { category: "Đồ ăn & Thức uống", kana: "にく", kanji: "肉", romaji: "niku", meaning: "Thịt" },
    { category: "Đồ ăn & Thức uống", kana: "ぎゅうにく", kanji: "牛肉", romaji: "gyuuniku", meaning: "Thịt bò" },
    { category: "Đồ ăn & Thức uống", kana: "とりにく", kanji: "鶏肉", romaji: "toriniku", meaning: "Thịt gà" },
    { category: "Đồ ăn & Thức uống", kana: "とんかつ", kanji: "豚カツ", romaji: "tonkatsu", meaning: "Thịt lợn chiên" },
    { category: "Đồ ăn & Thức uống", kana: "ハンバーグ", kanji: "Hamburger", romaji: "hanba-gu", meaning: "Thịt băm rán" },
    { category: "Đồ ăn & Thức uống", kana: "やさい", kanji: "野菜", romaji: "yasai", meaning: "Rau củ" },
    { category: "Đồ ăn & Thức uống", kana: "イチゴ", kanji: "苺", romaji: "ichigo", meaning: "Dâu tây" },
    { category: "Đồ ăn & Thức uống", kana: "りょうり", kanji: "料理", romaji: "ryouri", meaning: "Món ăn" },
    { category: "Đồ ăn & Thức uống", kana: "カレー", kanji: "Curry", romaji: "karee", meaning: "Cà ri" },
    { category: "Đồ ăn & Thức uống", kana: "スープ", kanji: "Soup", romaji: "su-pu", meaning: "Súp" },
    { category: "Đồ ăn & Thức uống", kana: "ごはん / ライス", kanji: "御飯 / Rice", romaji: "gohan / raisu", meaning: "Cơm" },
    { category: "Đồ ăn & Thức uống", kana: "ジュース", kanji: "Juice", romaji: "ju-su", meaning: "Nước ép hoa quả" },
    { category: "Đồ ăn & Thức uống", kana: "コーヒー", kanji: "Coffee", romaji: "ko-hi-", meaning: "Cà phê" },
    { category: "Đồ ăn & Thức uống", kana: "こうちゃ", kanji: "紅茶", romaji: "koucha", meaning: "Trà đen" },
    { category: "Đồ ăn & Thức uống", kana: "おちゃ", kanji: "お茶", romaji: "ocha", meaning: "Trà xanh" },
    { category: "Đồ ăn & Thức uống", kana: "ビール", kanji: "Beer", romaji: "bi-ru", meaning: "Bia" },
    { category: "Đồ ăn & Thức uống", kana: "ワイン", kanji: "Wine", romaji: "wain", meaning: "Rượu vang" },
    { category: "Đồ ăn & Thức uống", kana: "ケーキ", kanji: "Cake", romaji: "ke-ki", meaning: "Bánh ngọt" },
    { category: "Đồ ăn & Thức uống", kana: "パン", kanji: "Pain", romaji: "pan", meaning: "Bánh mì" },

    // 6. Vị trí & Tòa nhà (Mới từ file Docx & Note)
    { category: "Vị trí & Tòa nhà (Docx)", kana: "ぎんこう", kanji: "銀行", romaji: "ginkou", meaning: "Ngân hàng" },
    { category: "Vị trí & Tòa nhà (Docx)", kana: "たいいくかん", kanji: "体育館", romaji: "taiikukan", meaning: "Nhà thi đấu" },
    { category: "Vị trí & Tòa nhà (Docx)", kana: "としょかん", kanji: "図書館", romaji: "toshokan", meaning: "Thư viện" },
    { category: "Vị trí & Tòa nhà (Docx)", kana: "びょういん", kanji: "病院", romaji: "byouin", meaning: "Bệnh viện" },
    { category: "Vị trí & Tòa nhà (Docx)", kana: "ゆうびんきょく", kanji: "郵便局", romaji: "yuubinkyoku", meaning: "Bưu điện" },
    { category: "Vị trí & Tòa nhà (Docx)", kana: "ここ / こちら", kanji: "此処", romaji: "koko / kochira", meaning: "Ở đây, chỗ này" },
    { category: "Vị trí & Tòa nhà (Docx)", kana: "そこ / そちら", kanji: "其処", romaji: "soko / sochira", meaning: "Ở đó, chỗ đó" },
    { category: "Vị trí & Tòa nhà (Docx)", kana: "あそこ / あちら", kanji: "彼処", romaji: "asoko / achira", meaning: "Ở kia, chỗ kia" },
    { category: "Vị trí & Tòa nhà (Docx)", kana: "どこ / どちら", kanji: "何処", romaji: "doko / dochira", meaning: "Ở đâu, chỗ nào" },

    // 7. Thời gian & Buổi (Mới từ file Docx)
    { category: "Thời gian & Buổi (Docx)", kana: "いま", kanji: "今", romaji: "ima", meaning: "Bây giờ" },
    { category: "Thời gian & Buổi (Docx)", kana: "ごぜん", kanji: "午前", romaji: "gozen", meaning: "Buổi sáng (AM)" },
    { category: "Thời gian & Buổi (Docx)", kana: "ごご", kanji: "午後", romaji: "gogo", meaning: "Buổi chiều (PM)" },
    { category: "Thời gian & Buổi (Docx)", kana: "ひる", kanji: "昼", romaji: "hiru", meaning: "Buổi trưa" },
    { category: "Thời gian & Buổi (Docx)", kana: "じゅきょう", kanji: "儒教", romaji: "jukyou", meaning: "Tiết học" },
    { category: "Thời gian & Buổi (Docx)", kana: "テスト", kanji: "Test", romaji: "tesuto", meaning: "Bài kiểm tra" },
    { category: "Thời gian & Buổi (Docx)", kana: "やすみ", kanji: "休み", romaji: "yasumi", meaning: "Nghỉ ngơi" },
    { category: "Thời gian & Buổi (Docx)", kana: "じかん", kanji: "時間", romaji: "jikan", meaning: "Thời gian" },
    { category: "Thời gian & Buổi (Docx)", kana: "はん", kanji: "半", romaji: "han", meaning: "Rưỡi / 30 phút" },

    // 8. Tháng (1 - 12)
    { category: "Tháng (1-12)", kana: "いちがつ", kanji: "一月", romaji: "ichigatsu", meaning: "Tháng 1" },
    { category: "Tháng (1-12)", kana: "にがつ", kanji: "二月", romaji: "nigatsu", meaning: "Tháng 2" },
    { category: "Tháng (1-12)", kana: "さんがつ", kanji: "三月", romaji: "sangatsu", meaning: "Tháng 3" },
    { category: "Tháng (1-12)", kana: "しがつ", kanji: "四月", romaji: "shigatsu", meaning: "Tháng 4 (Đặc biệt)" },
    { category: "Tháng (1-12)", kana: "ごがつ", kanji: "五月", romaji: "gogatsu", meaning: "Tháng 5" },
    { category: "Tháng (1-12)", kana: "ろくがつ", kanji: "六月", romaji: "rokugatsu", meaning: "Tháng 6" },
    { category: "Tháng (1-12)", kana: "しちがつ", kanji: "七月", romaji: "shichigatsu", meaning: "Tháng 7 (Đặc biệt)" },
    { category: "Tháng (1-12)", kana: "はちがつ", kanji: "八月", romaji: "hachigatsu", meaning: "Tháng 8" },
    { category: "Tháng (1-12)", kana: "くがつ", kanji: "九月", romaji: "kugatsu", meaning: "Tháng 9 (Đặc biệt)" },
    { category: "Tháng (1-12)", kana: "じゅうがつ", kanji: "十月", romaji: "juugatsu", meaning: "Tháng 10" },
    { category: "Tháng (1-12)", kana: "じゅういちがつ", kanji: "十一月", romaji: "juuichigatsu", meaning: "Tháng 11" },
    { category: "Tháng (1-12)", kana: "じゅうにがつ", kanji: "十二月", romaji: "juunigatsu", meaning: "Tháng 12" },

    // 9. Ngày trong tháng (1 - 31)
    { category: "Ngày trong tháng (1-31)", kana: "ついたち", kanji: "一日", romaji: "tsuitachi", meaning: "Mùng 1" },
    { category: "Ngày trong tháng (1-31)", kana: "ふつか", kanji: "二日", romaji: "futsuka", meaning: "Mùng 2 / 2 ngày" },
    { category: "Ngày trong tháng (1-31)", kana: "みっか", kanji: "三日", romaji: "mikka", meaning: "Mùng 3 / 3 ngày" },
    { category: "Ngày trong tháng (1-31)", kana: "よっか", kanji: "四日", romaji: "yokka", meaning: "Mùng 4 / 4 ngày" },
    { category: "Ngày trong tháng (1-31)", kana: "いつか", kanji: "五日", romaji: "itsuka", meaning: "Mùng 5 / 5 ngày" },
    { category: "Ngày trong tháng (1-31)", kana: "むいか", kanji: "六日", romaji: "muika", meaning: "Mùng 6 / 6 ngày" },
    { category: "Ngày trong tháng (1-31)", kana: "なのか", kanji: "七日", romaji: "nanoka", meaning: "Mùng 7 / 7 ngày" },
    { category: "Ngày trong tháng (1-31)", kana: "ようか", kanji: "八日", romaji: "youka", meaning: "Mùng 8 / 8 ngày" },
    { category: "Ngày trong tháng (1-31)", kana: "ここのか", kanji: "九日", romaji: "kokonoka", meaning: "Mùng 9 / 9 ngày" },
    { category: "Ngày trong tháng (1-31)", kana: "とおか", kanji: "十日", romaji: "tooka", meaning: "Mùng 10 / 10 ngày" },
    { category: "Ngày trong tháng (1-31)", kana: "じゅういちにち", kanji: "十一日", romaji: "juuichinichi", meaning: "Ngày 11" },
    { category: "Ngày trong tháng (1-31)", kana: "じゅうににち", kanji: "十二日", romaji: "juuninichi", meaning: "Ngày 12" },
    { category: "Ngày trong tháng (1-31)", kana: "じゅうさんにち", kanji: "十三日", romaji: "juusannichi", meaning: "Ngày 13" },
    { category: "Ngày trong tháng (1-31)", kana: "じゅうよっか", kanji: "十四日", romaji: "juuyokka", meaning: "Ngày 14 (Đặc biệt)" },
    { category: "Ngày trong tháng (1-31)", kana: "じゅうごにち", kanji: "十五日", romaji: "juugonichi", meaning: "Ngày 15" },
    { category: "Ngày trong tháng (1-31)", kana: "じゅうろくにち", kanji: "十六日", romaji: "juurokunichi", meaning: "Ngày 16" },
    { category: "Ngày trong tháng (1-31)", kana: "じゅうしちにち", kanji: "十七日", romaji: "juushichinichi", meaning: "Ngày 17" },
    { category: "Ngày trong tháng (1-31)", kana: "じゅうはちにち", kanji: "十八日", romaji: "juuhachinichi", meaning: "Ngày 18" },
    { category: "Ngày trong tháng (1-31)", kana: "じゅうくにち", kanji: "十九日", romaji: "juukunichi", meaning: "Ngày 19" },
    { category: "Ngày trong tháng (1-31)", kana: "はつか", kanji: "二十日", romaji: "hatsuka", meaning: "Ngày 20 (Đặc biệt)" },
    { category: "Ngày trong tháng (1-31)", kana: "にじゅういちにち", kanji: "二十一日", romaji: "nijuuichinichi", meaning: "Ngày 21" },
    { category: "Ngày trong tháng (1-31)", kana: "にじゅうににち", kanji: "二十二日", romaji: "nijuuninichi", meaning: "Ngày 22" },
    { category: "Ngày trong tháng (1-31)", kana: "にじゅうさんにち", kanji: "二十三日", romaji: "nijuusannichi", meaning: "Ngày 23" },
    { category: "Ngày trong tháng (1-31)", kana: "にじゅうよっか", kanji: "二十四日", romaji: "nijuuyokka", meaning: "Ngày 24" },
    { category: "Ngày trong tháng (1-31)", kana: "にじゅうごにち", kanji: "二十五日", romaji: "nijuugonichi", meaning: "Ngày 25" },
    { category: "Ngày trong tháng (1-31)", kana: "にじゅうろくにち", kanji: "二十六日", romaji: "nijuurokunichi", meaning: "Ngày 26" },
    { category: "Ngày trong tháng (1-31)", kana: "にじゅうしちにち", kanji: "二十七日", romaji: "nijuushichinichi", meaning: "Ngày 27" },
    { category: "Ngày trong tháng (1-31)", kana: "にじゅうはちにち", kanji: "二十八日", romaji: "nijuuhachinichi", meaning: "Ngày 28" },
    { category: "Ngày trong tháng (1-31)", kana: "にじゅうくにち", kanji: "二十九日", romaji: "nijuukunichi", meaning: "Ngày 29" },
    { category: "Ngày trong tháng (1-31)", kana: "さんじゅうにち", kanji: "三十日", romaji: "sanjuunichi", meaning: "Ngày 30" },
    { category: "Ngày trong tháng (1-31)", kana: "さんじゅういちにち", kanji: "三十一日", romaji: "sanjuuichinichi", meaning: "Ngày 31" },

    // 10. Tầng lầu (1 - 10)
    { category: "Tầng lầu (1-10)", kana: "いっかい", kanji: "一階", romaji: "ikkai", meaning: "Tầng 1" },
    { category: "Tầng lầu (1-10)", kana: "にかい", kanji: "二階", romaji: "nikai", meaning: "Tầng 2" },
    { category: "Tầng lầu (1-10)", kana: "さんがい", kanji: "三階", romaji: "sangai", meaning: "Tầng 3" },
    { category: "Tầng lầu (1-10)", kana: "よんかい", kanji: "四階", romaji: "yonkai", meaning: "Tầng 4" },
    { category: "Tầng lầu (1-10)", kana: "ごかい", kanji: "五階", romaji: "gokai", meaning: "Tầng 5" },
    { category: "Tầng lầu (1-10)", kana: "ろっかい", kanji: "六階", romaji: "rokkai", meaning: "Tầng 6" },
    { category: "Tầng lầu (1-10)", kana: "ななかい", kanji: "七階", romaji: "nanakai", meaning: "Tầng 7" },
    { category: "Tầng lầu (1-10)", kana: "はっかい", kanji: "八階", romaji: "hakkai", meaning: "Tầng 8" },
    { category: "Tầng lầu (1-10)", kana: "きゅうかい", kanji: "九階", romaji: "kyuukai", meaning: "Tầng 9" },
    { category: "Tầng lầu (1-10)", kana: "じゅっかい / じっかい", kanji: "十階", romaji: "jukkai / jikkai", meaning: "Tầng 10" },
    { category: "Tầng lầu (1-10)", kana: "なんがい", kanji: "何階", romaji: "nangai", meaning: "Tầng mấy" },

    // 11. Số đếm & Tiền tệ
    { category: "Số đếm & Tiền tệ", kana: "ひゃく", kanji: "百", romaji: "hyaku", meaning: "100 (Trăm)" },
    { category: "Số đếm & Tiền tệ", kana: "にひゃく", kanji: "二百", romaji: "nihyaku", meaning: "200 (Hai trăm)" },
    { category: "Số đếm & Tiền tệ", kana: "さんびゃく", kanji: "三百", romaji: "sanbyaku", meaning: "300 (Ba trăm)" },
    { category: "Số đếm & Tiền tệ", kana: "せん", kanji: "千", romaji: "sen", meaning: "1.000 (Nghìn)" },
    { category: "Số đếm & Tiền tệ", kana: "さんぜん", kanji: "三千", romaji: "sanzen", meaning: "3.000 (Ba nghìn)" },
    { category: "Số đếm & Tiền tệ", kana: "まん", kanji: "万", romaji: "man", meaning: "10.000 (Chục nghìn / Vạn)" },
    { category: "Số đếm & Tiền tệ", kana: "えん", kanji: "円", romaji: "en", meaning: "Yên (Tiền tệ Nhật)" },
    { category: "Số đếm & Tiền tệ", kana: "いくら", kanji: "幾ら", romaji: "ikura", meaning: "Bao nhiêu tiền" },
    { category: "Số đếm & Tiền tệ", kana: "じゅうはっさい", kanji: "十八", romaji: "juu hassai", meaning: "18 tuổi (Cách đếm đặc biệt)" },
    { category: "Số đếm & Tiền tệ", kana: "はたち", kanji: "二十", romaji: "hatachi", meaning: "20 tuổi (Cách đếm đặc biệt)" },

    // 12. Số thứ tự (1-10) (1-10)
    { category: "Số thứ tự (1-10)", kana: "ひとつ", kanji: "一つ", romaji: "hitotsu", meaning: "1 cái (vật)" },
    { category: "Số thứ tự (1-10)", kana: "ふたつ", kanji: "二つ", romaji: "futatsu", meaning: "2 cái (vật)" },
    { category: "Số thứ tự (1-10)", kana: "みっつ", kanji: "三つ", romaji: "mittsu", meaning: "3 cái (vật)" },
    { category: "Số thứ tự (1-10)", kana: "よっつ", kanji: "四つ", romaji: "yottsu", meaning: "4 cái (vật)" },
    { category: "Số thứ tự (1-10)", kana: "いつつ", kanji: "五つ", romaji: "itsutsu", meaning: "5 cái (vật)" },
    { category: "Số thứ tự (1-10)", kana: "むっつ", kanji: "六つ", romaji: "muttsu", meaning: "6 cái (vật)" },
    { category: "Số thứ tự (1-10)", kana: "ななつ", kanji: "七つ", romaji: "nanatsu", meaning: "7 cái (vật)" },
    { category: "Số thứ tự (1-10)", kana: "やっつ", kanji: "八つ", romaji: "yattsu", meaning: "8 cái (vật)" },
    { category: "Số thứ tự (1-10)", kana: "ここのつ", kanji: "九つ", romaji: "kokonotsu", meaning: "9 cái (vật)" },
    { category: "Số thứ tự (1-10)", kana: "とお", kanji: "十", romaji: "too", meaning: "10 cái (vật)" },

    // 13. Thể thao & Sở thích
    { category: "Thể thao & Sở thích", kana: "しゅみ", kanji: "趣味", romaji: "shumi", meaning: "Sở thích" },
    { category: "Thể thao & Sở thích", kana: "スポーツ", kanji: "Sports", romaji: "supo-tsu", meaning: "Thể thao" },
    { category: "Thể thao & Sở thích", kana: "サッカー", kanji: "Soccer", romaji: "sakka-", meaning: "Bóng đá" },
    { category: "Thể thao & Sở thích", kana: "テニス", kanji: "Tennis", romaji: "tenisu", meaning: "Quần vợt" },
    { category: "Thể thao & Sở thích", kana: "すいえい", kanji: "水泳", romaji: "suiei", meaning: "Bơi lội" },
    { category: "Thể thao & Sở thích", kana: "りょこう", kanji: "旅行", romaji: "ryokou", meaning: "Du lịch" },
    { category: "Thể thao & Sở thích", kana: "えいが", kanji: "映画", romaji: "eiga", meaning: "Xem phim" },
    { category: "Thể thao & Sở thích", kana: "おんがく", kanji: "音楽", romaji: "ongaku", meaning: "Âm nhạc" },
    { category: "Thể thao & Sở thích", kana: "どくしょ", kanji: "読書", romaji: "dokusho", meaning: "Đọc sách" },
    { category: "Thể thao & Sở thích", kana: "りょうり", kanji: "料理", romaji: "ryouri", meaning: "Nấu ăn" }
];

// --- PHÂN TRANG VÀ LỌC TỪ VỰNG ---
let currentPage = 1;
const rowsPerPage = 10;

function getFilteredVocab() {
    const keyword = document.getElementById('vocabSearch').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;

    return vocabData.filter(v => {
        const matchKeyword = v.kana.toLowerCase().includes(keyword) || 
                             v.kanji.toLowerCase().includes(keyword) || 
                             v.meaning.toLowerCase().includes(keyword) || 
                             v.romaji.toLowerCase().includes(keyword);
        const matchCategory = selectedCategory === 'all' || v.category === selectedCategory;
        return matchKeyword && matchCategory;
    });
}

function renderVocabTable() {
    const filteredData = getFilteredVocab();
    const tbody = document.getElementById('vocabTableBody');
    tbody.innerHTML = "";

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    if (paginatedData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center text-muted py-4">Không tìm thấy từ vựng phù hợp.</td></tr>`;
        document.getElementById('paginationContainer').innerHTML = "";
        return;
    }

    paginatedData.forEach(item => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td><span class="badge bg-info text-dark">${item.category}</span></td>
            <td><strong>${item.kana}</strong> <br><small class="text-muted">(${item.romaji})</small></td>
            <td><span class="badge bg-secondary fs-6">${item.kanji}</span></td>
            <td><span class="fw-medium text-dark">${item.meaning}</span></td>
            <td class="text-end">
                <button class="btn btn-sm btn-outline-primary" onclick="playAudio('${item.kana}')"><i class="fa-solid fa-volume-high me-1"></i> Nghe</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    renderPagination(filteredData.length);
}

function renderPagination(totalRows) {
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const paginationContainer = document.getElementById('paginationContainer');
    paginationContainer.innerHTML = "";

    if (totalPages <= 1) return;

    let prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `<a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Trang trước</a>`;
    paginationContainer.appendChild(prevLi);

    for (let i = 1; i <= totalPages; i++) {
        let li = document.createElement('li');
        li.className = `page-item ${currentPage === i ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
        paginationContainer.appendChild(li);
    }

    let nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `<a class="page-link" href="#" onclick="changePage(${totalPages})">Trang sau</a>`;
    paginationContainer.appendChild(nextLi);
}

function changePage(page) {
    const filteredData = getFilteredVocab();
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderVocabTable();
}

document.getElementById('vocabSearch').addEventListener('input', () => {
    currentPage = 1;
    renderVocabTable();
});
document.getElementById('categoryFilter').addEventListener('change', () => {
    currentPage = 1;
    renderVocabTable();
});

renderVocabTable();


// --- 4. SPEAKING Q&A & NGỮ PHÁP (GIỮ LẠI TOÀN BỘ KHÔNG CẮT BỚT) ---
const grammarData = [
    {
        title: "1. Hỏi và trả lời về mấy giờ [いまなんじですか]",
        formula: "Q: いま なんじ ですか。 -> A: [Giờ] じ [Phút] ふん です。",
        vn: "Hỏi và đáp về thời gian hiện tại (Mới từ file Docx).",
        qText: "Q: いま なんじ ですか。",
        qKana: "いま なんじですか。",
        qMeaning: "Hỏi: Bây giờ là mấy giờ?",
        aText: "A: ごご 2じ 30ふん (2じはん) です。",
        aKana: "ごごにじはん です。",
        aMeaning: "Đáp: Bây giờ là 2 giờ rưỡi chiều."
    },
    {
        title: "2. Cấu trúc khoảng thời gian [N は ~から~までです]",
        formula: "Q: [N] は なんじ から なんじ まで ですか。 -> A: [N] は [Giờ A] から [Giờ B] まで です。",
        vn: "Hỏi và đáp về khoảng thời gian bắt đầu và kết thúc (Mới từ file Docx).",
        qText: "Q: ぎんこう は なんじ から なんじ まで ですか。",
        qKana: "ぎんこうは なんじから なんじまでですか。",
        qMeaning: "Hỏi: Ngân hàng làm việc từ mấy giờ đến mấy giờ?",
        aText: "A: 9じ から 5じ まで です。",
        aKana: "くじから ごじまでです。",
        aMeaning: "Đáp: Từ 9 giờ đến 5 giờ."
    },
    {
        title: "3. Giới thiệu tên, quốc gia và nghề nghiệp [N1 は N2 です]",
        formula: "Q: どちらの かたですか。 -> A: [Quốc gia] + じんです。",
        vn: "Hỏi và đáp về quốc tịch / người nước nào.",
        qText: "Q: あなたは どちらの かたですか。",
        qKana: "あなたは どちらのかたですか。",
        qMeaning: "Hỏi: Bạn là người nước nào?",
        aText: "A: わたしは ベトナムじんです。",
        aKana: "わたしは ベトナムじんです。",
        aMeaning: "Đáp: Tôi là người Việt Nam."
    },
    {
        title: "4. Hỏi và trả lời về tuổi tác [なんさいですか / おいくつですか]",
        formula: "Q: なんさいですか。 -> A: [Số tuổi] + さい です。(20 tuổi: はたち)",
        vn: "Hỏi và đáp về tuổi (Lưu ý tuổi 20 dùng はたち).",
        qText: "Q: あなたは なんさい ですか。",
        qKana: "あなたは なんさいですか。",
        qMeaning: "Hỏi: Bạn bao nhiêu tuổi?",
        aText: "A: 20さい です (はたち です)。",
        aKana: "はたちです。",
        aMeaning: "Đáp: Tôi 20 tuổi."
    },
    {
        title: "5. Hỏi và trả lời về sinh nhật [たんじょうびは いつですか]",
        formula: "Q: たんじょうび は いつ ですか。 -> A: [Tháng] がつ [Ngày] にち です。",
        vn: "Hỏi và đáp về ngày tháng sinh nhật.",
        qText: "Q: たんじょうび は いつ ですか。",
        qKana: "たんじょうびは いつですか。",
        qMeaning: "Hỏi: Sinh nhật bạn vào ngày nào?",
        aText: "A: 3がつ 3か です。",
        aKana: "さんがつみっかです。",
        aMeaning: "Đáp: Sinh nhật tôi là ngày 3 tháng 3."
    },
    {
        title: "6. Hỏi giá tiền món đồ [いくらですか]",
        formula: "Q: [N] は いくら ですか。 -> A: [Số tiền] えん です。",
        vn: "Hỏi giá tiền khi mua sắm sản phẩm.",
        qText: "Q: この かばん は いくら ですか。",
        qKana: "このかばんはいくらですか。",
        qMeaning: "Hỏi: Chiếc túi này giá bao nhiêu tiền?",
        aText: "A: 100,000えん (じゅうまんえん) です。",
        aKana: "じゅうまんえんです。",
        aMeaning: "Đáp: Giá 100.000 yên."
    },
    {
        title: "7. Hỏi vị trí tòa nhà / vật thể [どこですか]",
        formula: "Q: [N] は どこ ですか。 -> A: [Địa điểm / Vị trí] です。",
        vn: "Hỏi vị trí của phòng, nhà vệ sinh hoặc đồ vật.",
        qText: "Q: トイレ は どこ ですか。",
        qKana: "トイレは どこですか。",
        qMeaning: "Hỏi: Phòng vệ sinh ở đâu?",
        aText: "A: あそこ です。(Ở đằng kia)",
        aKana: "あそこです。",
        aMeaning: "Đáp: Ở đằng kia."
    },
    {
        title: "8. Hỏi tầng mấy trong tòa nhà [なんがいですか]",
        formula: "Q: [N] は なんがい ですか。 -> A: [Số tầng] かい です。(Tầng 1: いっかい)",
        vn: "Hỏi cửa hàng hoặc phòng họp nằm ở tầng mấy.",
        qText: "Q: しょくどう は なんがい ですか。",
        qKana: "しょくどうは なんがいですか。",
        qMeaning: "Hỏi: Nhà ăn nằm ở tầng mấy?",
        aText: "A: 2かい です。(Tầng 2)",
        aKana: "にかいです。",
        aMeaning: "Đáp: Ở tầng 2."
    }
];

function renderGrammarList() {
    const container = document.getElementById('grammarListContainer');
    container.innerHTML = "";
    grammarData.forEach(g => {
        let div = document.createElement('div');
        div.className = "card grammar-card p-3 mb-3 shadow-sm";
        div.innerHTML = `
            <h5 class="fw-bold text-primary">${g.title}</h5>
            <p class="mb-1"><strong>Công thức:</strong> <code class="bg-light p-1 rounded text-danger">${g.formula}</code></p>
            <p class="mb-1 text-muted"><strong>Giải thích:</strong> ${g.vn}</p>
            <div class="bg-light p-3 rounded mt-2">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <div>
                        <strong class="text-danger">Câu hỏi:</strong> ${g.qText}<br>
                        <small class="text-muted">Nghĩa: ${g.qMeaning}</small>
                    </div>
                    <button class="btn btn-sm btn-outline-danger" onclick="playAudio('${g.qKana}')"><i class="fa-solid fa-volume-high me-1"></i> Nghe Q</button>
                </div>
                <hr class="my-1">
                <div class="d-flex justify-content-between align-items-center mt-2">
                    <div>
                        <strong class="text-success">Câu trả lời:</strong> ${g.aText}<br>
                        <small class="text-muted">Nghĩa: ${g.aMeaning}</small>
                    </div>
                    <button class="btn btn-sm btn-outline-success" onclick="playAudio('${g.aKana}')"><i class="fa-solid fa-volume-high me-1"></i> Nghe A</button>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}
renderGrammarList();


// --- 5. BÀI TẬP TRẮC NGHIỆM NGẪU NHIÊN ---
const questionBank = [
    { q: "Chữ 'あ' trong Hiragana đọc là gì?", options: ["a", "i", "u", "e"], answer: 0 },
    { q: "Chữ 'い' trong Hiragana đọc là gì?", options: ["a", "i", "u", "e"], answer: 1 },
    { q: "Chữ 'う' trong Hiragana đọc là gì?", options: ["a", "i", "u", "o"], answer: 2 },
    { q: "Chữ 'え' trong Hiragana đọc là gì?", options: ["e", "i", "u", "o"], answer: 0 },
    { q: "Chữ 'お' trong Hiragana đọc là gì?", options: ["a", "i", "o", "e"], answer: 2 },
    { q: "Cách đọc số đếm vật thể '1 cái' (hitotsu) viết bằng Kanji như thế nào?", options: ["一つ", "二つ", "三つ", "四つ"], answer: 0 },
    { q: "Cách đọc số đếm vật thể '2 cái' (futatsu) là gì?", options: ["hitotsu", "futatsu", "mittsu", "yottsu"], answer: 1 },
    { q: "Cách đọc số đếm vật thể '3 cái' (mittsu) viết bằng Kanji như thế nào?", options: ["一つ", "二つ", "三つ", "四つ"], answer: 2 },
    { q: "Cách đọc số đếm vật thể '4 cái' (yottsu) là gì?", options: ["hitotsu", "futatsu", "mittsu", "yottsu"], answer: 3 },
    { q: "Cách đọc số đếm vật thể '5 cái' là gì?", options: ["itsutsu", "muttsu", "nanatsu", "yattsu"], answer: 0 },
    { q: "Cách đọc số đếm vật thể '6 cái' là gì?", options: ["itsutsu", "muttsu", "nanatsu", "yattsu"], answer: 1 },
    { q: "Cách đọc số đếm vật thể '7 cái' là gì?", options: ["itsutsu", "muttsu", "nanatsu", "yattsu"], answer: 2 },
    { q: "Cách đọc số đếm vật thể '8 cái' là gì?", options: ["itsutsu", "muttsu", "nanatsu", "yattsu"], answer: 3 },
    { q: "Cách đọc số đếm vật thể '9 cái' là gì?", options: ["kokonotsu", "too", "hitotsu", "futatsu"], answer: 0 },
    { q: "Cách đọc số đếm vật thể '10 cái' là gì?", options: ["kokonotsu", "too", "hitotsu", "futatsu"], answer: 1 },
    { q: "Cách đọc đặc biệt cho '20 tuổi' trong tiếng Nhật là gì?", options: ["nijuusai", "hatachi", "nijusai", "hata"], answer: 1 },
    { q: "Từ 'としょかん' (toshokan) có nghĩa tiếng Việt là gì?", options: ["Bưu điện", "Thư viện", "Ngân hàng", "Bệnh viện"], answer: 1 },
    { q: "Cách đếm 'Tầng 1' (ikkai) viết bằng Kanji như thế nào?", options: ["一階", "二階", "三階", "四階"], answer: 0 },
    { q: "Cách đếm 'Tầng 2' là gì?", options: ["ikkai", "nikai", "sangai", "yonkai"], answer: 1 },
    { q: "Cách đếm 'Tầng 3' là gì?", options: ["ikkai", "nikai", "sangai", "yonkai"], answer: 2 },
    { q: "Từ 'いくら' (ikura) dùng để hỏi về điều gì?", options: ["Giá tiền", "Thời gian", "Vị trí", "Xuất xứ"], answer: 0 },
    { q: "Tháng 4 trong tiếng Nhật đọc là gì?", options: ["yongatsu", "shigatsu", "yonogatsu", "shigatsu"], answer: 1 },
    { q: "Tháng 7 trong tiếng Nhật đọc là gì?", options: ["nanagatsu", "shichigatsu", "shichigatsu", "nanagatsu"], answer: 1 },
    { q: "Tháng 9 trong tiếng Nhật đọc là gì?", options: ["kyuugatsu", "kugatsu", "kugatsu", "kyuugatsu"], answer: 1 },
    { q: "Cấu trúc 'từ [A] đến [B]' trong tiếng Nhật dùng trợ từ nào?", options: ["kara ... made", "wa ... desu", "ni ... de", "no ... to"], answer: 0 },
    { q: "Từ 'たんじょうび' (tanjoubi) có nghĩa là gì?", options: ["Sinh nhật", "Sở thích", "Nghề nghiệp", "Du lịch"], answer: 0 },
    { q: "Từ 'ぎんこう' (ginkou) có nghĩa là gì?", options: ["Bệnh viện", "Ngân hàng", "Thư viện", "Bưu điện"], answer: 1 },
    { q: "Câu hỏi 'Bây giờ là mấy giờ?' tiếng Nhật là gì?", options: ["いま なんじ ですか", "いま いくら ですか", "いま どこ ですか", "いま なんさい ですか"], answer: 0 },
    { q: "Từ 'びょういん' (byouin) nghĩa là gì?", options: ["Bệnh viện", "Bưu điện", "Thư viện", "Ngân hàng"], answer: 0 },
    { q: "Từ 'ゆうびんきょく' (yuubinkyoku) nghĩa là gì?", options: ["Bệnh viện", "Bưu điện", "Thư viện", "Ngân hàng"], answer: 1 },
    { q: "Từ 'おちゃ' (ocha) nghĩa là gì?", options: ["Trà xanh", "Trà đen", "Cà phê", "Nước"], answer: 0 },
    { q: "Từ 'こうちゃ' (koucha) nghĩa là gì?", options: ["Trà xanh", "Trà đen", "Cà phê", "Nước"], answer: 1 },
    { q: "Từ 'コーヒー' (koohii) nghĩa là gì?", options: ["Trà xanh", "Trà đen", "Cà phê", "Nước"], answer: 2 },
    { q: "Từ 'みず' (mizu) nghĩa là gì?", options: ["Nước", "Gạo", "Cá", "Thịt"], answer: 0 },
    { q: "Từ 'さかな' (sakana) nghĩa là gì?", options: ["Nước", "Gạo", "Cá", "Thịt"], answer: 2 },
    { q: "Từ 'にく' (niku) nghĩa là gì?", options: ["Nước", "Gạo", "Cá", "Thịt"], answer: 3 },
    { q: "Từ 'ぎゅうにく' (gyuuniku) nghĩa là gì?", options: ["Thịt bò", "Thịt gà", "Thịt lợn", "Cá"], answer: 0 },
    { q: "Từ 'とりにく' (toriniku) nghĩa là gì?", options: ["Thịt bò", "Thịt gà", "Thịt lợn", "Cá"], answer: 1 },
    { q: "Từ 'やさい' (yasai) nghĩa là gì?", options: ["Rau củ", "Trái cây", "Thịt", "Cá"], answer: 0 },
    { q: "Từ 'いちご' (ichigo) nghĩa là gì?", options: ["Táo", "Dâu tây", "Cam", "Chuối"], answer: 1 },
    { q: "Từ 'せんせい' (sensei) nghĩa là gì?", options: ["Học sinh", "Giáo viên", "Bác sĩ", "Kỹ sư"], answer: 1 },
    { q: "Từ 'がくせい' (gakusei) nghĩa là gì?", options: ["Học sinh, sinh viên", "Giáo viên", "Bác sĩ", "Nhân viên"], answer: 0 },
    { q: "Từ 'いしゃ' (isha) nghĩa là gì?", options: ["Giáo viên", "Bác sĩ", "Y tá", "Nhân viên"], answer: 1 },
    { q: "Từ 'かいしゃいん' (kaishain) nghĩa là gì?", options: ["Nhân viên công ty", "Học sinh", "Giáo viên", "Bác sĩ"], answer: 0 },
    { q: "Từ 'てんいん' (tenin) nghĩa là gì?", options: ["Nhân viên bán hàng", "Nhân viên công ty", "Bác sĩ", "Giáo viên"], answer: 0 },
    { q: "Từ 'じしょ' (jisho) nghĩa là gì?", options: ["Sách", "Từ điển", "Tạp chí", "Vở"], answer: 1 },
    { q: "Từ 'ざっし' (zasshi) nghĩa là gì?", options: ["Sách", "Từ điển", "Tạp chí", "Vở"], answer: 2 },
    { q: "Từ 'ノート' (nooto) nghĩa là gì?", options: ["Vở, sổ tay", "Sách", "Bút", "Cặp"], answer: 0 },
    { q: "Từ 'えんぴつ' (enpitsu) nghĩa là gì?", options: ["Bút chì", "Bút bi", "Cục tẩy", "Thước kẻ"], answer: 0 },
    { q: "Từ 'かばん' (kaban) nghĩa là gì?", options: ["Cặp sách, túi xách", "Giày", "Quần", "Áo"], answer: 0 },
    { q: "Từ 'とけい' (tokei) nghĩa là gì?", options: ["Đồng hồ", "Xe hơi", "Máy ảnh", "Điện thoại"], answer: 0 },
    { q: "Từ 'くるま' (kuruma) nghĩa là gì?", options: ["Xe hơi, ô tô", "Xe đạp", "Xe máy", "Tàu hỏa"], answer: 0 },
    { q: "Từ 'カメラ' (kamera) nghĩa là gì?", options: ["Máy ảnh", "Máy tính", "Tủ lạnh", "Tivi"], answer: 0 },
    { q: "Từ 'パソコン' (pasokon) nghĩa là gì?", options: ["Máy tính xách tay", "Điện thoại", "Máy ảnh", "Tivi"], answer: 0 },
    { q: "Từ 'くつ' (kutsu) nghĩa là gì?", options: ["Giày", "Quần", "Áo", "Mũ"], answer: 0 },
    { q: "Từ 'スポーツ' (supootsu) nghĩa là gì?", options: ["Thể thao", "Sở thích", "Du lịch", "Xem phim"], answer: 0 },
    { q: "Từ 'サッカー' (sakkaa) nghĩa là gì?", options: ["Bóng đá", "Quần vợt", "Bơi lội", "Bóng rổ"], answer: 0 },
    { q: "Từ 'テニス' (tenisu) nghĩa là gì?", options: ["Bóng đá", "Quần vợt", "Bơi lội", "Bóng rổ"], answer: 1 },
    { q: "Từ 'すいえい' (suiei) nghĩa là gì?", options: ["Bơi lội", "Đọc sách", "Nấu ăn", "Du lịch"], answer: 0 },
    { q: "Từ 'りょこう' (ryokou) nghĩa là gì?", options: ["Du lịch", "Xem phim", "Đọc sách", "Âm nhạc"], answer: 0 },
    { q: "Từ 'えいが' (eiga) nghĩa là gì?", options: ["Du lịch", "Xem phim", "Đọc sách", "Âm nhạc"], answer: 1 },
    { q: "Từ 'おんがく' (ongaku) nghĩa là gì?", options: ["Du lịch", "Xem phim", "Đọc sách", "Âm nhạc"], answer: 3 },
    { q: "Từ 'どくしょ' (dokusho) nghĩa là gì?", options: ["Đọc sách", "Nấu ăn", "Xem phim", "Du lịch"], answer: 0 },
    { q: "Từ 'りょうり' (ryouri) nghĩa là gì?", options: ["Nấu ăn, món ăn", "Đọc sách", "Xem phim", "Du lịch"], answer: 0 },
    { q: "Số 100 trong tiếng Nhật đọc là gì?", options: ["hyaku", "sen", "man", "en"], answer: 0 },
    { q: "Số 1.000 trong tiếng Nhật đọc là gì?", options: ["hyaku", "sen", "man", "en"], answer: 1 },
    { q: "Số 10.000 trong tiếng Nhật đọc là gì?", options: ["hyaku", "sen", "man", "en"], answer: 2 },
    { q: "Đơn vị tiền tệ của Nhật Bản là gì?", options: ["en", "won", "dollar", "dong"], answer: 0 },
    { q: "Từ 'ひゃく' (hyaku) có giá trị số là bao nhiêu?", options: ["10", "100", "1.000", "10.000"], answer: 1 },
    { q: "Từ 'せん' (sen) có giá trị số là bao nhiêu?", options: ["10", "100", "1.000", "10.000"], answer: 2 },
    { q: "Từ 'まん' (man) có giá trị số là bao nhiêu?", options: ["10", "100", "1.000", "10.000"], answer: 3 },
    { q: "Mùng 1 trong tháng đọc là gì?", options: ["tsuitachi", "futsuka", "mikka", "yokka"], answer: 0 },
    { q: "Mùng 2 trong tháng đọc là gì?", options: ["tsuitachi", "futsuka", "mikka", "yokka"], answer: 1 },
    { q: "Mùng 3 trong tháng đọc là gì?", options: ["tsuitachi", "futsuka", "mikka", "yokka"], answer: 2 },
    { q: "Mùng 4 trong tháng đọc là gì?", options: ["tsuitachi", "futsuka", "mikka", "yokka"], answer: 3 },
    { q: "Ngày 14 trong tháng đọc là gì?", options: ["juuyokka", "juusannichi", "juugonichi", "juurokunichi"], answer: 0 },
    { q: "Ngày 20 trong tháng đọc là gì?", options: ["hatsuka", "nijyuunichi", "juuyokka", "tsuitachi"], answer: 0 },
    { q: "Buổi sáng (AM) trong tiếng Nhật là gì?", options: ["gozen", "gogo", "hiru", "ima"], answer: 0 },
    { q: "Buổi chiều (PM) trong tiếng Nhật là gì?", options: ["gozen", "gogo", "hiru", "ima"], answer: 1 },
    { q: "Buổi trưa trong tiếng Nhật là gì?", options: ["gozen", "gogo", "hiru", "ima"], answer: 2 },
    { q: "Từ 'いま' (ima) nghĩa là gì?", options: ["Bây giờ", "Hôm nay", "Ngày mai", "Hôm qua"], answer: 0 },
    { q: "Từ 'やすみ' (yasumi) nghĩa là gì?", options: ["Nghỉ ngơi, ngày nghỉ", "Thời gian", "Tiết học", "Kiểm tra"], answer: 0 },
    { q: "Từ 'テスト' (tesuto) nghĩa là gì?", options: ["Kiểm tra", "Nghỉ ngơi", "Thời gian", "Tiết học"], answer: 0 },
    { q: "Từ 'じかん' (jikan) nghĩa là gì?", options: ["Thời gian", "Kiểm tra", "Nghỉ ngơi", "Tiết học"], answer: 0 },
    { q: "Từ 'はん' (han) nghĩa là gì?", options: ["Rưỡi / 30 phút", "Giờ", "Phút", "Giây"], answer: 0 },
    { q: "Trợ từ nào dùng để chỉ chủ ngữ hoặc chủ đề trong câu?", options: ["wa", "o", "ni", "de"], answer: 0 },
    { q: "Trợ từ nào dùng để thể hiện sự sở hữu (của)?", options: ["no", "wa", "o", "ni"], answer: 0 },
    { q: "Trợ từ nào dùng để thêm ý nghĩa 'cũng'?", options: ["mo", "wa", "no", "o"], answer: 0 },
    { q: "Từ nào dùng để hỏi 'Cái gì'?", options: ["nan / nani", "dare", "doko", "itsu"], answer: 0 },
    { q: "Từ nào dùng để hỏi 'Ai'?", options: ["nan", "dare", "doko", "itsu"], answer: 1 },
    { q: "Từ nào dùng để hỏi 'Ở đâu'?", options: ["nan", "dare", "doko", "itsu"], answer: 2 },
    { q: "Từ nào dùng để hỏi 'Khi nào / Bao giờ'?", options: ["nan", "dare", "doko", "itsu"], answer: 3 },
    { q: "Từ 'chỗ đó / ở đó' gần người nghe đọc là gì?", options: ["koko", "soko", "asoko", "doko"], answer: 1 },
    { q: "Từ 'chỗ kia / ở kia' xa cả người nói và người nghe đọc là gì?", options: ["koko", "soko", "asoko", "doko"], answer: 2 },
    { q: "Từ 'ở đây / chỗ này' gần người nói đọc là gì?", options: ["koko", "soko", "asoko", "doko"], answer: 0 },
    { q: "Hàng 'ka' trong bảng chữ cái Hiragana gồm các chữ cái nào?", options: ["ka ki ku ke ko", "sa shi su se so", "ta chi tsu te to", "na ni nu ne no"], answer: 0 },
    { q: "Hàng 'sa' trong bảng chữ cái Hiragana gồm các chữ cái nào?", options: ["ka ki ku ke ko", "sa shi su se so", "ta chi tsu te to", "na ni nu ne no"], answer: 1 },
    { q: "Hàng 'ta' trong bảng chữ cái Hiragana gồm các chữ cái nào?", options: ["ka ki ku ke ko", "sa shi su se so", "ta chi tsu te to", "na ni nu ne no"], answer: 2 },
    { q: "Hàng 'na' trong bảng chữ cái Hiragana gồm các chữ cái nào?", options: ["ka ki ku ke ko", "sa shi su se so", "ta chi tsu te to", "na ni nu ne no"], answer: 3 }
];

let currentQuizList = [];
let currentQuestionIndex = 0;
let score = 0;

document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
document.getElementById('restartQuizBtn').addEventListener('click', startQuiz);
document.getElementById('nextQuizBtn').addEventListener('click', handleNextQuestion);

function startQuiz() {
    currentQuizList = [...questionBank].sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('startQuizBtn').classList.add('d-none');
    document.getElementById('quizResultContainer').classList.add('d-none');
    document.getElementById('quizContainer').classList.remove('d-none');

    loadQuestion();
}

function loadQuestion() {
    document.getElementById('nextQuizBtn').classList.add('d-none');
    let qObj = currentQuizList[currentQuestionIndex];
    
    document.getElementById('quizProgress').innerText = `Câu hỏi: ${currentQuestionIndex + 1} / ${currentQuizList.length}`;
    document.getElementById('quizScore').innerText = `Điểm: ${score}`;
    document.getElementById('quizQuestionText').innerText = qObj.q;

    let optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = "";

    qObj.options.forEach((opt, idx) => {
        let btn = document.createElement('button');
        btn.className = "btn quiz-option-btn";
        btn.innerHTML = `<strong>${String.fromCharCode(65 + idx)}.</strong> ${opt}`;
        btn.onclick = () => selectAnswer(idx, btn, qObj.answer);
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(selectedIndex, btnElement, correctIndex) {
    let allBtns = document.querySelectorAll('.quiz-option-btn');
    allBtns.forEach(b => b.disabled = true);

    const isCorrect = (selectedIndex === correctIndex);
    
    // PHÁT ÂM THANH ĐÚNG HOẶC SAI TỰ ĐỘNG
    playFeedbackSound(isCorrect);

    if (isCorrect) {
        btnElement.classList.add('correct');
        score += 10;
    } else {
        btnElement.classList.add('incorrect');
        allBtns[correctIndex].classList.add('correct');
    }

    document.getElementById('quizScore').innerText = `Điểm: ${score}`;
    
    if (currentQuestionIndex < currentQuizList.length - 1) {
        document.getElementById('nextQuizBtn').classList.remove('d-none');
    } else {
        setTimeout(showQuizResult, 1200);
    }
}

// --- PHÁT ÂM THANH ĐÚNG / SAI ---
function playFeedbackSound(isCorrect) {
    // isCorrect = true đọc là "せいかい" (Seikai - Đúng)
    // isCorrect = false đọc là "ふせいかい" (Fuseikai - Sai)
    const textToSpeak = isCorrect ? "せいかい" : "ふせいかい";
    
    const googleTranslateAudioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(textToSpeak)}&tl=ja&client=tw-ob`;
    
    const audio = new Audio(googleTranslateAudioUrl);
    audio.volume = 1.0;
    audio.play().catch(error => {
        console.warn("Lỗi phát âm phản hồi, dùng Web Speech API dự phòng:", error);
        
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.lang = 'ja-JP';
            utterance.rate = 1.0;
            utterance.pitch = 1.0;
            window.speechSynthesis.speak(utterance);
        }
    });
}

function handleNextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showQuizResult() {
    document.getElementById('quizContainer').classList.add('d-none');
    document.getElementById('quizResultContainer').classList.remove('d-none');
    document.getElementById('finalScoreText').innerText = `Bạn đã hoàn thành bài tập tổng hợp! Tổng điểm: ${score} / 100 điểm.`;
}