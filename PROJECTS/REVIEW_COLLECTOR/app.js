// Create State
const state = JSON.parse(localStorage.getItem("reviews")) ?? {
    reviews: []
}

// Selecte Elements
const userName = document.querySelector("#username-box");
const userProfession = document.querySelector("#profession-box");
const userReview = document.querySelector("#review-box");
const ratingBoxes = document.querySelectorAll(".rating-box");
const submitBtn = document.querySelector("#submit-btn");
const reviewContainer = document.querySelector("#review-result-container");

// Review Count
let reviewCount = 0;

ratingBoxes.forEach(ratingBox => {
    ratingBox.addEventListener("click", (event) => {
        reviewCount = Number(event.currentTarget.id);

        completedStar();
    })
})

// Update Rating UI in completed format
function completedStar() {
    for (let i = 0; i < reviewCount; i++) {
        ratingBoxes[i].innerHTML = `<img src="complete-star.png" alt="star-image">`
    }

    for (let i = reviewCount; i < ratingBoxes.length; i++) {
        ratingBoxes[i].innerHTML = `<img src="pending-star.png" alt="star-image">`
    }
}


// Update Rating UI in pending format
function pendingStar() {
    for (let i = 0; i < ratingBoxes.length; i++) {
        ratingBoxes[i].innerHTML = `<img src="pending-star.png" alt="star-image">`
    }
}


// Add Event Listner on Submit Button
submitBtn.addEventListener("click", () => {
    if (!userName.value.trim() || !userProfession.value.trim() || !userReview.value.trim() || !reviewCount) {
        alert("Please! Fill all required data");
        return;
    }

    addReview(userName.value, userProfession.value, userReview.value);

    reviewCount = 0;
    pendingStar();
})


// Creating a Add Review Function
function addReview(name, profession, review) {
    const captelizeName = name.toLowerCase().split(" ").map(eachpart => {
        return `${eachpart[0].toUpperCase()}${eachpart.slice(1, eachpart.length)}`
    });

    const captelizeProfession = profession.toLowerCase().split(" ").map(eachpart => {
        return `${eachpart[0].toUpperCase()}${eachpart.slice(1, eachpart.length)}`
    });


    state.reviews.push({
        name: captelizeName.join(" "),
        profession: captelizeProfession.join(" "),
        review,
        totalReview: reviewCount,
        createdAt: new Date().toDateString(),
    })

    userName.value = "";
    userProfession.value = "";
    userReview.value = "";
    userName.focus();

    saveState();
    render();
}


// Save State
function saveState() {
    localStorage.setItem("reviews", JSON.stringify(state));
}


// Render Function
function render() {
    reviewContainer.innerHTML = "";

    state.reviews.forEach(review => {
        reviewContainer.insertAdjacentHTML(
            "beforeend",
            createReviewElement(review)
        );
    });
}


// Create Review Element Function
function createReviewElement(review) {
    return `<li class="review-box">
                <div class="topbar">
                    <div class="user-details-container">
                        <img src="user.jpg" alt="profile-img" class="profile-img">
                        <div class="user-detail">
                            <p class="user-name">${review.name}</p>
                            <p class="user-profession">${review.profession}</p>
                        </div>
                    </div>
                    
                    <div class="rating-date-container">
                        <div class="rating-result-box">
                            ${createStart(review.totalReview)}
                        </div>
                        <p class="post-time">${review.createdAt}</p>
                    </div>
                </div>
                <p class="review">${review.review}</p>
            </li>`
}


// Creating Dynamic Star Function
function createStart(rating) {
    let stars = "";

    for (let i = 0; i < rating; i++) {
        stars += `<img src="complete-star.png" alt="star-image">`
    }

    for (let i = rating; i < ratingBoxes.length; i++) {
        stars += `<img src="pending-star.png" alt="star-image">`
    }

    return stars;
}


// Add Event Listner on Window
window.addEventListener("DOMContentLoaded", render);