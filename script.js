const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const today = new Date();
$('#todayDate').textContent = today.toLocaleDateString('bn-BD', {day:'numeric', month:'long', year:'numeric'});
$('#year').textContent = today.getFullYear();

const menuToggle = $('#menuToggle');
const mainNav = $('#mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});

$('#searchOpen').addEventListener('click', () => {
  $('#searchPanel').classList.toggle('open');
  if ($('#searchPanel').classList.contains('open')) $('#searchInput').focus();
});
$('#searchClose').addEventListener('click', () => $('#searchPanel').classList.remove('open'));

function toast(message) {
  const node = $('#toast');
  node.textContent = message;
  node.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove('show'), 2700);
}

const stories = {
  nets5000: {category:'সোনাগাজী', title:'সোনাগাজীতে ৫ হাজার মিটার চরঘেরা জাল জব্দ', date:'২৬ অক্টোবর ২০২৬', source:'SATV', url:'https://www.satv.tv/%E0%A6%B8%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%9C%E0%A7%80%E0%A6%A4%E0%A7%87-%E0%A7%AB-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A6%AE%E0%A6%BF%E0%A6%9F%E0%A6%BE%E0%A6%B0/', image:'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=80', body:'ফেনীর সোনাগাজীতে নিষিদ্ধ সময়ে নদীতে মাছ ধরার দায়ে বড় ফেনী নদীতে অভিযান চালিয়ে পাঁচ হাজার মিটার চরঘেরা জাল জব্দ করেছে প্রশাসন। SATV-এর প্রতিবেদনে বলা হয়েছে, ২৬ অক্টোবর ২০২৬ তারিখে জেলা প্রশাসকের নেতৃত্বে এ অভিযান পরিচালিত হয়। মৎস্যসম্পদ সংরক্ষণে নিষিদ্ধ সময়ে মাছ ধরা বন্ধ রাখার বিষয়টি প্রতিবেদনে গুরুত্ব পেয়েছে।'},
  nets3000: {category:'সোনাগাজী', title:'নিষেধাজ্ঞা অমান্য: বড় ফেনী নদী থেকে ৩ হাজার মিটার জাল জব্দ', date:'১১ অক্টোবর ২০২৬', source:'দৈনিক ফেনীর সময়', url:'https://fenirshomoy.com/20100/', image:'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=80', body:'দৈনিক ফেনীর সময়ের প্রতিবেদনে বলা হয়েছে, মা ইলিশ সংরক্ষণ মৌসুমে বড় ফেনী নদীতে অভিযান চালিয়ে তিন হাজার মিটার চরঘেরা ও কারেন্ট জাল জব্দ করে মৎস্য বিভাগ। প্রতিবেদন অনুযায়ী, মুহুরী প্রকল্প এলাকা থেকে চর খোন্দকার ও চর আবদুল্লাহ এলাকার নদীতে অভিযান পরিচালিত হয়।'},
  nijam: {category:'আইন ও অপরাধ', title:'সোনাগাজীতে ২৬ মামলার পলাতক আসামি নিজাম ডাকাত গ্রেফতার', date:'১৩ অক্টোবর ২০২৬', source:'দৈনিক ফেনীর সময়', url:'https://fenirshomoy.com/20159/', image:'https://images.unsplash.com/photo-1453873531674-2151bcd01707?auto=format&fit=crop&w=1000&q=80', body:'দৈনিক ফেনীর সময়ের প্রকাশিত প্রতিবেদনে বলা হয়েছে, হত্যা, ডাকাতি, চাঁদাবাজি ও মাদক-সংক্রান্ত ২৬টি মামলার আসামি নিজাম উদ্দিন ওরফে নিজাম ডাকাতকে সোনাগাজীর কারামতিয়া বাজার এলাকা থেকে গ্রেফতার করা হয়। প্রতিবেদনে পুলিশি বক্তব্যের ভিত্তিতে ঘটনার বিবরণ প্রকাশ করা হয়েছে।'},
  muhuri: {category:'ফিচার ও ভ্রমণ', title:'নদী, সবুজ আর সূর্যাস্তের সৌন্দর্যে মুহুরী সেচ প্রকল্প', date:'২ নভেম্বর ২০২৬', source:'Bangla Tribune', url:'https://www.banglatribune.com/journey/978129/%E0%A6%A8%E0%A6%A6%E0%A7%80-%E0%A6%B8%E0%A6%AC%E0%A7%81%E0%A6%9C-%E0%A6%86%E0%A6%B0-%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A7%8B%E0%A6%A6%E0%A7%9F-%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A7%8C%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A7%87-%E0%A6%AE%E0%A7%81%E0%A6%97%E0%A7%8D%E0%A6%A7', image:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80', body:'Bangla Tribune-এর ২ নভেম্বর ২০২৬-এর ফিচারে সোনাগাজীর মুহুরী সেচ প্রকল্পের নদী, সবুজ পরিবেশ, শীতের অতিথি পাখি ও পর্যটন সম্ভাবনার কথা তুলে ধরা হয়েছে। প্রতিবেদনটিতে পর্যটকবান্ধব অবকাঠামো, নিরাপত্তা ও সুযোগ-সুবিধা উন্নয়নের প্রয়োজনীয়তার কথাও উল্লেখ রয়েছে।'},
  schools: {category:'শিক্ষা', title:'সোনাগাজীর দুই বিদ্যালয়ে ৭ নভেম্বরের কর্মসূচি না হওয়ার অভিযোগ', date:'১০ নভেম্বর ২০২৬', source:'Adi Bangla TV', url:'https://adibanglatv.com/2026/11/10/%E0%A6%B8%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%9C%E0%A7%80%E0%A6%B0-%E0%A6%A6%E0%A7%81%E0%A6%87-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A6%AF%E0%A6%BC%E0%A7%87/', image:'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80', body:'Adi Bangla TV-এর ১০ নভেম্বর ২০২৬-এর প্রতিবেদনে সোনাগাজী উপজেলার দুটি বিদ্যালয়ে ৭ নভেম্বর জাতীয় বিপ্লব ও সংহতি দিবস উপলক্ষে কর্মসূচি পালন না হওয়ার অভিযোগের কথা বলা হয়েছে। এটি অভিযোগভিত্তিক প্রতিবেদন; সংশ্লিষ্ট বিদ্যালয় ও কর্তৃপক্ষের বক্তব্য যাচাই করে পূর্ণাঙ্গ সংবাদ প্রকাশ করা উচিত।'},
  hilsa: {category:'মৎস্য ও কৃষি', title:'মা ইলিশ সংরক্ষণে বড় ফেনী নদীতে অভিযান', date:'১০ অক্টোবর ২০২৬', source:'দৈনিক ফেনীর সময় (সোনাগাজী আর্কাইভ)', url:'https://fenirshomoy.com/category/%E0%A6%B8%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%9C%E0%A7%80/', image:'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&w=1000&q=80', body:'দৈনিক ফেনীর সময়ের সোনাগাজী আর্কাইভে ১০ অক্টোবর ২০২৬ তারিখে বড় ফেনী নদী ও মোহনা এলাকায় মা ইলিশ সংরক্ষণে অভিযানের খবর প্রকাশিত হয়েছে। বিস্তারিত ও হালনাগাদ তথ্যের জন্য মূল আর্কাইভের প্রতিবেদন দেখুন।'},
  media: {category:'মিডিয়া', title:'ফেনীতে মাল্টিমিডিয়া সাংবাদিকদের সংগঠনের আত্মপ্রকাশ', date:'৯ নভেম্বর ২০২৬', source:'দেশযোগ', url:'https://deshjog.com/topic/pheni', image:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=80', body:'দেশযোগের ফেনী বিষয়ক সংবাদ তালিকায় ৯ নভেম্বর ২০২৬ তারিখে ফেনীতে মাল্টিমিডিয়া সাংবাদিকদের একটি সংগঠনের আত্মপ্রকাশ ও ১৬ সদস্যের কমিটি গঠনের খবর প্রকাশিত হয়েছে। বিস্তারিত তথ্যের জন্য মূল সংবাদসূত্র দেখুন।'}
};

const modal = $('#storyModal');
function openStory(key) {
  const item = stories[key];
  if (!item) return;
  $('#modalCategory').textContent = item.category;
  $('#modalTitle').textContent = item.title;
  $('#modalMeta').textContent = `${item.date} · SN NEWS news desk reference`;
  $('#modalImage').src = item.image;
  $('#modalImage').alt = item.title;
  $('#modalBody').textContent = item.body;
  $('#modalSource').href = item.url;
  $('#modalSource').textContent = `${item.source} — মূল প্রতিবেদন পড়ুন ↗`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeStory() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
$$('[data-story]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  openStory(link.dataset.story);
}));
$$('[data-close]').forEach(el => el.addEventListener('click', closeStory));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeStory(); });

let activeFilter = 'all';
let searchTerm = '';
function renderFilter() {
  let count = 0;
  $$('#newsGrid .news-card').forEach(card => {
    const categoryOk = activeFilter === 'all' || card.dataset.category === activeFilter;
    const searchable = `${card.dataset.search || ''} ${card.textContent}`.toLocaleLowerCase('bn');
    const searchOk = !searchTerm || searchable.includes(searchTerm.toLocaleLowerCase('bn'));
    card.hidden = !(categoryOk && searchOk);
    if (!card.hidden) count++;
  });
  $('#noResults').hidden = count !== 0;
}
$$('.filter').forEach(button => button.addEventListener('click', () => {
  $$('.filter').forEach(el => el.classList.remove('active'));
  button.classList.add('active');
  activeFilter = button.dataset.filter;
  renderFilter();
}));
function searchNews() {
  searchTerm = $('#searchInput').value.trim();
  activeFilter = 'all';
  $$('.filter').forEach(el => el.classList.toggle('active', el.dataset.filter === 'all'));
  renderFilter();
  $('#searchPanel').classList.remove('open');
  $('#newsFeed').scrollIntoView({behavior:'smooth'});
  if (!searchTerm) toast('সব সংবাদ দেখানো হচ্ছে');
}
$('#searchBtn').addEventListener('click', searchNews);
$('#searchInput').addEventListener('keydown', event => { if (event.key === 'Enter') searchNews(); });
$$('[data-jump-filter]').forEach(link => link.addEventListener('click', () => {
  activeFilter = link.dataset.jumpFilter;
  $$('.filter').forEach(el => el.classList.toggle('active', el.dataset.filter === activeFilter));
  renderFilter();
}));
$('#loadMore').addEventListener('click', () => toast('ডেমো সংস্করণে প্রদর্শনের জন্য নির্বাচিত সংবাদগুলো দেখানো হয়েছে।'));

const backTop = $('#backTop');
window.addEventListener('scroll', () => backTop.classList.toggle('visible', window.scrollY > 450));
backTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

const ticker = $('#tickerTrack');
ticker.innerHTML += ticker.innerHTML;
