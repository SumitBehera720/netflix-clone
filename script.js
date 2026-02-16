// ==================== TRENDING CAROUSEL NAVIGATION ====================
let trendingPosition = 'first'; // 'first' shows 1-6, 'second' shows 7-10

function scrollTrending(direction) {
    console.log('scrollTrending called with direction:', direction);
    
    const grid = document.getElementById('trendingGrid');
    const prevBtn = document.getElementById('trendingPrev');
    const nextBtn = document.getElementById('trendingNext');
    const container = document.querySelector('.trending-container');
    
    console.log('Grid:', grid, 'Prev:', prevBtn, 'Next:', nextBtn);
    
    if (direction === 'next') {
        // Show items 7-10, move arrow to left side
        grid.classList.add('shift-left');
        trendingPosition = 'second';
        
        // Hide right arrow, show left arrow
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'flex';
        
        // Move arrows: prev to left (order 1), next hidden
        prevBtn.style.order = '1';
        nextBtn.style.order = '3';
        
        console.log('Showing page 2 (items 7-10), left arrow should be visible');
    } else {
        // Show items 1-6, move arrow to right side
        grid.classList.remove('shift-left');
        trendingPosition = 'first';
        
        // Hide left arrow, show right arrow
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'flex';
        
        // Move arrows: next to right (order 3), prev hidden
        prevBtn.style.order = '1';
        nextBtn.style.order = '3';
        
        console.log('Showing page 1 (items 1-6), right arrow should be visible');
    }
}

// Initialize trending navigation on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎬 StreamFlix Clone Loaded Successfully!');
    
    // Initialize trending arrows - start with right arrow visible
    const trendingPrevBtn = document.getElementById('trendingPrev');
    const trendingNextBtn = document.getElementById('trendingNext');
    
    if (trendingPrevBtn) {
        trendingPrevBtn.style.display = 'none';
        trendingPrevBtn.style.order = '1';
    }
    if (trendingNextBtn) {
        trendingNextBtn.style.display = 'flex';
        trendingNextBtn.style.order = '3';
    }
    
    // Set cursor for content rows
    document.querySelectorAll('.content-row').forEach(row => {
        row.style.cursor = 'grab';
    });
});

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== MODAL FUNCTIONS ====================
// Content data with specific images
const contentData = {
    'Stranger Things': {
        image: 'https://scoopcast.in/wp-content/uploads/2025/11/STARNGER-THINGS-5-Trailer.jpg',
        description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
        cast: 'Millie Bobby Brown, Finn Wolfhard, Winona Ryder',
        genres: 'Sci-Fi, Horror, Drama',
        year: '2016',
        rating: 'TV-14',
        duration: '5 Seasons'
    },
    'The Crown': {
        image: 'https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcZ8wsEuB1z96AEBK2hvlxHDwKMCEGbE4i0wzXlPo0PYxqQnpyJZzO3VUVE_nXEoe6AW2spo-3ylQ2DkbOfuig_7ND2Szl75xlLW.jpg?r=844',
        description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.',
        cast: 'Claire Foy, Olivia Colman, Imelda Staunton',
        genres: 'Drama, Biography, History',
        year: '2023',
        rating: 'TV-MA',
        duration: '6 Seasons'
    },
    'Dark': {
        image: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/xtcyo6jblfnqv2dlkfnr.jpg',
        description: 'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the dark secrets of four estranged families.',
        cast: 'Louis Hofmann, Karoline Eichhorn, Lisa Vicari',
        genres: 'Mystery, Thriller, Sci-Fi',
        year: '2020',
        rating: 'TV-MA',
        duration: '3 Seasons'
    },
    'Ozark': {
        image: 'https://m.media-amazon.com/images/M/MV5BZDk1ZTdjOWItNTJmYS00MGIzLThmY2ItZWNiOGY5MzJlNTA5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        description: 'A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.',
        cast: 'Jason Bateman, Laura Linney, Sofia Hublitz',
        genres: 'Crime, Drama, Thriller',
        year: '2022',
        rating: 'TV-MA',
        duration: '4 Seasons'
    },
    'Witcher': {
        image: 'https://m.media-amazon.com/images/M/MV5BOTQzMzNmMzUtODgwNS00YTdhLTg5N2MtOWU1YTc4YWY3NjRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
        cast: 'Henry Cavill, Anya Chalotra, Freya Allan',
        genres: 'Fantasy, Action, Adventure',
        year: '2023',
        rating: 'TV-MA',
        duration: '3 Seasons'
    },
    'Money Heist': {
        image: 'https://www.tallengestore.com/cdn/shop/products/MoneyHeist4-NetflixTVShowPoster_7e0e76a3-ff28-4625-bc59-6ac24288a02c.jpg?v=1589268616',
        description: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
        cast: 'Álvaro Morte, Úrsula Corberó, Itziar Ituño',
        genres: 'Crime, Drama, Thriller',
        year: '2021',
        rating: 'TV-MA',
        duration: '5 Seasons'
    },
    'Breaking Bad': {
        image: 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/breaking_bad_4.png',
        description: 'A high school chemistry teacher diagnosed with terminal lung cancer turns to manufacturing and selling methamphetamine to secure his family\'s future.',
        cast: 'Bryan Cranston, Aaron Paul, Anna Gunn',
        genres: 'Crime, Drama, Thriller',
        year: '2013',
        rating: 'TV-MA',
        duration: '5 Seasons'
    },
    'Squid Game': {
        image: 'https://m.media-amazon.com/images/M/MV5BYTU3ZDVhNmMtMDVlNC00MDc0LTgwNDMtYWE5MTI2ZGI4YWIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        description: 'Hundreds of cash-strapped contestants accept an invitation to compete in children\'s games for a tempting prize, but the stakes are deadly.',
        cast: 'Lee Jung-jae, Park Hae-soo, Wi Ha-joon',
        genres: 'Thriller, Drama, Mystery',
        year: '2021',
        rating: 'TV-MA',
        duration: '1 Season'
    },
    'Wednesday': {
        image: 'https://m.media-amazon.com/images/M/MV5BMDE1NjNmZjgtZTg0OC00NjkxLWEzYzItMDNkMTc3YjgxZWQyXkEyXkFqcGc@._V1_.jpg',
        description: 'Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.',
        cast: 'Jenna Ortega, Catherine Zeta-Jones, Luis Guzmán',
        genres: 'Comedy, Horror, Mystery',
        year: '2022',
        rating: 'TV-14',
        duration: '1 Season'
    },
    'The Last of Us': {
        image: 'https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_.jpg',
        description: 'Twenty years after a fungal outbreak ravages the planet, survivors Joel and Ellie embark on a brutal journey through post-pandemic America.',
        cast: 'Pedro Pascal, Bella Ramsey, Anna Torv',
        genres: 'Drama, Action, Sci-Fi',
        year: '2023',
        rating: 'TV-MA',
        duration: '1 Season'
    },
    'The Bear': {
        image: 'https://m.media-amazon.com/images/M/MV5BYWZhNDZiMzAtZmZlYS00MWFmLWE2MWEtNDAxZTZiN2U4Y2U2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        description: 'A young chef from the fine dining world returns to Chicago to run his family\'s sandwich shop after a heartbreaking death in his family.',
        cast: 'Jeremy Allen White, Ebon Moss-Bachrach, Ayo Edebiri',
        genres: 'Drama, Comedy',
        year: '2023',
        rating: 'TV-MA',
        duration: '2 Seasons'
    },
    'Black Mirror': {
        image: 'https://www.dish.com/content/dish/us/en/home/dig/tv-shows/thriller/black-mirror-cast/_jcr_content/root/container/flexcontainer/row1/column0/image.coreimg.jpeg/1744382649981/blackmirrorthumb.jpeg',
        description: 'An anthology series exploring a twisted, high-tech multiverse where humanity\'s greatest innovations and darkest instincts collide.',
        cast: 'Various Cast',
        genres: 'Sci-Fi, Thriller, Drama',
        year: '2023',
        rating: 'TV-MA',
        duration: '5 Seasons'
    },
    'The Office': {
        image: 'https://m.media-amazon.com/images/S/pv-target-images/0dd8322809f5493fa8c2a8a2bbfe53a1e9960eaab0aac5517296bc9bdfa567ad.jpg',
        description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
        cast: 'Steve Carell, John Krasinski, Jenna Fischer',
        genres: 'Comedy, Mockumentary',
        year: '2013',
        rating: 'TV-14',
        duration: '9 Seasons'
    },
    'Narcos': {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OLnCNCDOrgGXf6VNirlYeIKe39MBS3ogIQ&s',
        description: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country.',
        cast: 'Pedro Pascal, Wagner Moura, Boyd Holbrook',
        genres: 'Crime, Drama, Biography',
        year: '2017',
        rating: 'TV-MA',
        duration: '3 Seasons'
    },
    'Peaky Blinders': {
        image: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg',
        description: 'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps.',
        cast: 'Cillian Murphy, Paul Anderson, Helen McCrory',
        genres: 'Crime, Drama, Period',
        year: '2022',
        rating: 'TV-MA',
        duration: '6 Seasons'
    },
    'Vikings': {
        image: 'https://i.ytimg.com/vi/IBehjjt6V70/maxresdefault.jpg',
        description: 'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore and raid distant shores.',
        cast: 'Travis Fimmel, Katheryn Winnick, Clive Standen',
        genres: 'Action, Adventure, Drama',
        year: '2020',
        rating: 'TV-MA',
        duration: '6 Seasons'
    },
    'Extraction': {
        image: 'https://thefilmlegacy.com/wp-content/uploads/2023/07/extraction-1.jpeg',
        description: 'A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord.',
        cast: 'Chris Hemsworth, Golshifteh Farahani, David Harbour',
        genres: 'Action, Thriller',
        year: '2023',
        rating: 'R',
        duration: '2h 10m'
    },
    'Red Notice': {
        image: 'https://dove.org/wp-content/uploads/notice.jpeg',
        description: 'An Interpol agent tracks the world\'s most wanted art thief in this action-comedy thriller.',
        cast: 'Dwayne Johnson, Ryan Reynolds, Gal Gadot',
        genres: 'Action, Comedy, Thriller',
        year: '2021',
        rating: 'PG-13',
        duration: '1h 58m'
    },
    'The Gray Man': {
        image: 'https://ntvb.tmsimg.com/assets/p21562309_v_h8_aa.jpg?w=1280&h=720',
        description: 'When the CIA\'s most skilled operative-whose true identity is known to none-accidentally uncovers dark agency secrets, he becomes hunted around the globe.',
        cast: 'Ryan Gosling, Chris Evans, Ana de Armas',
        genres: 'Action, Thriller',
        year: '2022',
        rating: 'PG-13',
        duration: '2h 2m'
    },
    '6 Underground': {
        image: 'https://w0.peakpx.com/wallpaper/266/977/HD-wallpaper-movie-6-underground-ryan-reynolds.jpg',
        description: 'Six individuals from all around the globe, each the very best at what they do, have been chosen to form a vigilante squad.',
        cast: 'Ryan Reynolds, Mélanie Laurent, Manuel Garcia-Rulfo',
        genres: 'Action, Thriller',
        year: '2019',
        rating: 'R',
        duration: '2h 8m'
    },
    'Army of the Dead': {
        image: 'https://m.media-amazon.com/images/M/MV5BNTcyMWNhNjMtMzZlZC00NTU5LTk2ODktZmRkYWJmYWY0YmQ1XkEyXkFqcGdeQXNuZXNodQ@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        description: 'Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble, venturing into the quarantine zone to pull off the greatest heist ever.',
        cast: 'Dave Bautista, Ella Purnell, Ana de la Reguera',
        genres: 'Action, Horror, Thriller',
        year: '2021',
        rating: 'R',
        duration: '2h 28m'
    },
    'Brooklyn Nine-Nine': {
        image: 'https://ntvb.tmsimg.com/assets/p20145748_b_h8_aa.jpg?w=960&h=540',
        description: 'Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD\'s 99th Precinct.',
        cast: 'Andy Samberg, Stephanie Beatriz, Terry Crews',
        genres: 'Comedy, Crime',
        year: '2021',
        rating: 'TV-14',
        duration: '8 Seasons'
    },
    'Parks and Recreation': {
        image: 'https://images1.resources.foxtel.com.au/store2/mount1/16/4/7j6ls.jpg',
        description: 'The absurd antics of an Indiana town\'s public officials as they pursue sundry projects to make their city a better place.',
        cast: 'Amy Poehler, Nick Offerman, Aubrey Plaza',
        genres: 'Comedy, Mockumentary',
        year: '2015',
        rating: 'TV-14',
        duration: '7 Seasons'
    },
    'The Good Place': {
        image: 'https://rangeviewnews.org/wp-content/uploads/2020/02/f11df77f-115e-4eba-8efa-264f0ff322d0.jpeg',
        description: 'A woman struggles to define what it means to be good after she mistakenly ends up in the Good Place after her death.',
        cast: 'Kristen Bell, William Jackson Harper, Jameela Jamil',
        genres: 'Comedy, Fantasy',
        year: '2020',
        rating: 'TV-PG',
        duration: '4 Seasons'
    },
    'Arrested Development': {
        image: 'https://resizing.flixster.com/ScNzbBYrXzyENUWKGX1C3iFzqAo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p184931_b_h10_ad.jpg',
        description: 'Level-headed son Michael Bluth takes over family affairs after his father is imprisoned. But the rest of his spoiled, dysfunctional family are making his job unbearable.',
        cast: 'Jason Bateman, Michael Cera, Portia de Rossi',
        genres: 'Comedy',
        year: '2019',
        rating: 'TV-14',
        duration: '5 Seasons'
    },
    'Schitts Creek': {
        image: 'https://img4.hulu.com/user/v3/artwork/a2e7a946-9652-48a8-884b-3ea7ea4de273?base_image_bucket_name=image_manager&base_image=14302b5a-ed71-4eed-861e-81258a19326b&region=US&format=webp&size=952x536',
        description: 'After suddenly finding themselves broke, the formerly filthy-rich Rose family is reduced to living in a ramshackle motel in a town they once bought as a joke.',
        cast: 'Eugene Levy, Catherine O\'Hara, Dan Levy',
        genres: 'Comedy',
        year: '2020',
        rating: 'TV-14',
        duration: '6 Seasons'
    },
};

function openModal(title) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalHero = document.querySelector('.modal-hero');
    const modalDescription = document.querySelector('.modal-description');
    const modalMeta = document.querySelector('.modal-meta');
    const castValue = document.querySelectorAll('.detail-value')[0];
    const genresValue = document.querySelectorAll('.detail-value')[1];
    
    // Get content data
    const content = contentData[title] || {
        image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=80',
        description: 'An epic tale of adventure, mystery, and intrigue that will keep you on the edge of your seat.',
        cast: 'John Doe, Jane Smith, Michael Johnson',
        genres: 'Drama, Thriller, Mystery',
        year: '2023',
        rating: 'TV-MA',
        duration: '3 Seasons'
    };
    
    // Update modal content
    modalTitle.textContent = title;
    modalHero.style.background = `linear-gradient(to bottom, rgba(20,20,20,0.3), var(--secondary-dark)), url('${content.image}') center/cover`;
    modalDescription.textContent = content.description;
    
    // Update meta information
    modalMeta.innerHTML = `
        <span>${content.year}</span>
        <span class="rating">${content.rating}</span>
        <span>${content.duration}</span>
    `;
    
    // Update details
    if (castValue) castValue.textContent = content.cast;
    if (genresValue) genresValue.textContent = content.genres;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        closeModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ==================== CONTENT INTERACTION FUNCTIONS ====================
function playContent() {
    alert('🎬 Playing content... (This would open the video player in a real app)');
    closeModal();
}

function addToList() {
    alert('✅ Added to My List!');
}

// ==================== SEARCH FUNCTIONALITY ====================
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim()) {
        alert(`🔍 Searching for: ${searchInput.value}`);
        searchInput.value = '';
    }
});

// ==================== SMOOTH SCROLL FOR CONTENT ROWS ====================
document.querySelectorAll('.content-row').forEach(row => {
    let isDown = false;
    let startX;
    let scrollLeft;

    row.addEventListener('mousedown', (e) => {
        isDown = true;
        row.style.cursor = 'grabbing';
        startX = e.pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
    });

    row.addEventListener('mouseleave', () => {
        isDown = false;
        row.style.cursor = 'grab';
    });

    row.addEventListener('mouseup', () => {
        isDown = false;
        row.style.cursor = 'grab';
    });

    row.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - row.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        row.scrollLeft = scrollLeft - walk;
    });
});