import { writable, derived } from 'svelte/store';
import { filter , search , regex } from './list.svelte';

// base list
interface Item {
    key: string;
    original: string;
    translated: string;
}

let test: Item[] = [
    { key: "greeting", original: "Hello", translated: "こんにちは" },
    { key: "farewell", original: "Goodbye", translated: "さようなら" },
    { key: "thank_you", original: "Thank you", translated: "ありがとう" },
    { key: "please", original: "Please", translated: "お願いします" },
    { key: "sorry", original: "Sorry", translated: "ごめんなさい" },
    { key: "yes", original: "Yes", translated: "はい" },
    { key: "no", original: "No", translated: "いいえ" },
    { key: "good_morning", original: "Good morning", translated: "おはようございます" },
    { key: "good_night", original: "Good night", translated: "おやすみなさい" },
    { key: "how_are_you", original: "How are you?", translated: "お元気ですか？" },
    { key: "excuse_me", original: "Excuse me", translated: "すみません" },
    { key: "welcome", original: "Welcome", translated: "ようこそ" },
    { key: "congratulations", original: "Congratulations", translated: "おめでとうございます" },
    { key: "happy_birthday", original: "Happy Birthday", translated: "お誕生日おめでとうございます" },
    { key: "good_luck", original: "Good luck", translated: "頑張ってください" },
    { key: "take_care", original: "Take care", translated: "気をつけて" },
    { key: "see_you_later", original: "See you later", translated: "また後で" },
    { key: "what_is_your_name", original: "What is your name?", translated: "お名前は何ですか？" },
    { key: "my_name_is", original: "My name is", translated: "私の名前は" },
    { key: "where_is_the_station", original: "Where is the station?", translated: "駅はどこですか？" },
    { key: "how_much_is_this", original: "How much is this?", translated: "これはいくらですか？" },
    { key: "i_dont_understand", original: "I don't understand", translated: "わかりません" },
    { key: "can_you_help_me", original: "Can you help me?", translated: "手伝ってくれますか？" },
    { key: "i_love_you", original: "I love you", translated: "愛しています" },
    { key: "i_am_lost", original: "I am lost", translated: "道に迷いました" },
    { key: "call_police", original: "Call the police", translated: "警察を呼んでください" },
    { key: "call_ambulance", original: "Call an ambulance", translated: "救急車を呼んでください" },
    { key: "i_am_hungry", original: "I am hungry", translated: "お腹が空きました" },
    { key: "i_am_thirsty", original: "I am thirsty", translated: "喉が渇きました" },
    { key: "bathroom", original: "Bathroom", translated: "トイレ" },
    { key: "water", original: "Water", translated: "水" },
    { key: "food", original: "Food", translated: "食べ物" },
    { key: "ticket", original: "Ticket", translated: "切符" },
    { key: "test", original: "oioi", translated: ""} 
];

export let items = writable([...test]);

export const filteredItems = derived([items, filter, search, regex], ([$items, $filter, $search, $regex]) => {
    return $items.filter((item: Item) => {
        let matchesSearch = true;
        if ($search) {
            if ($regex) {
                try {
                    const reg = new RegExp($search, 'i'); // 大文字小文字無視
                    matchesSearch = reg.test(item.original) || reg.test(item.translated) || reg.test(item.key);
                } catch (e) {
                    // 無効な regex の場合、マッチしない
                    matchesSearch = false;
                }
            } else {
                matchesSearch = item.original.toLowerCase().includes($search.toLowerCase()) ||
                    item.translated.toLowerCase().includes($search.toLowerCase()) ||
                    item.key.toLowerCase().includes($search.toLowerCase());
            }
        }

        // フィルタ条件
        let matchesFilter = false;
        if ($filter === "all") {
            matchesFilter = true;
        } else if ($filter === "translated") {
            matchesFilter = item.translated !== "";
        } else if ($filter === "untranslated") {
            matchesFilter = item.translated === "";
        }

        return matchesSearch && matchesFilter;
    });
});