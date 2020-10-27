// let pets = [];
// let fullPetsList = [];

// const request = new XMLHttpRequest();

// request.open('GET', './pets.json');
// request.onload = () => {console.log(request.response)};
// fetch('./pets.json').then(res => res.json()).then(list => {
//   pets = list;

//   fullPetsList = (() => {
//     let tempArr = [];

//     for (let i = 0; i < 6; i++) {
//       const newPets = pets;

//       for (let j = pets.length; j > 0; j--) {
//         let randInt = Math.floor(Math.random() * j);
//         const randElem = newPets.splice(randInt, 1)[0];
//         newPets.push(randElem);
//       }

//       tempArr = [...tempArr, ...newPets];
//     }
//     return tempArr;
//   })();

//   fullPetsList = sort863(fullPetsList);
  
//   createPets(fullPetsList);

//   for (let i = 0; i < (fullPetsList.length / 6); i++) {
//     const stepList = fullPetsList.slice(i * 6, (i * 6) + 6);
    
//     for (let j = 0; j < 6; j++) {
//       stepList.forEach((item, ind) => {
//         if (item.name === stepList[j].name && (ind !== j)) {
//           document.querySelector(".our-friends-cards").children[(i * 6) + j].style.border = '5px solid red';
//         }
//       })
//     }
//   }
// })

// // request.onload = () => {
// //   pets = JSON.parse(request.response)

  
// // }
// // const modalContent = document.getElementById('modal');

// // modalContent.innerHTML = createElements(petsList);
// // <div class="modal" id="modal">
// //         <img src=" ${petsList[i].img} "  alt="Pet ${petsList[i].name}"></img>
// //         <div class="modal-body">
            
// //             <div class="modal-header">
// //                 <div class="title">${petsList[i].name}</div>
// //                 <div class="subtitle">Dog - Labrador</div>
// //                 <button data-close-button class="close-button">&times;</button>
// //             </div>
// //             <p>Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. 
// //             This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a 
// //             storm in the house if she has all of her favorite toys.
// //             </p>
// //             <ul>
// //                 <li><span>Age: </span>2 months</li>
// //                 <li><span>Inoculations: </span>none</li>
// //                 <li><span>Diseases: </span>none</li>
// //                 <li><span>Parasites: </span>none</li>
// //             </ul>
// //         </div>
// //     </div>
// // </div>


// const createElements = (petsList) => {
//   let str = ''
//   for (let i = 0; i < petsList.length; i++) {
//       str += `<div class="our-friends-card description">
//                 <img class="our-friends-card__image" src=" ${petsList[i].img} "  alt="Pet ${petsList[i].name}">
//                 <div class="our-friends-card__content">
//                   <h4 class="our-friends-card__title">
//                       ${petsList[i].name}
//                   </h4>
//                   <button class="our-friends-card__button">
//                       Learn more
//                   </button>
//                 </div>
//               </div>`;                              
//   }
//   return str;
// }

// // const createPets = (petsList) => {
// //   const elem = document.querySelector(".our-friends-cards");
// //   elem.innerHTML += createElements(petsList);
// // }
// // const createElements = (petsList) => {
// //   let str = ''
// //   for (let i = 0; i < petsList.length; i++) {
// //       str += `<div class="our-friends-card description">
// //                 <img class="our-friends-card__image" src=" ${petsList[i].img} "  alt="Pet ${petsList[i].name}">
// //                 <div class="our-friends-card__content">
// //                   <h4 class="our-friends-card__title">
// //                       ${petsList[i].name}
// //                   </h4>
// //                   <button class="our-friends-card__button">
// //                       Learn more
// //                   </button>
// //                 </div>
// //               </div>`;                              
// //   }
// //   return str;
// // }
// // request.send();

// const sort863 = (list) => {
//   let unique8List = [];
//   let length = list.length;
//   for (let i = 0; i < length / 8; i++) {
//     const uniqueStepList = [];
//     for (j = 0; j < list.length; j++) {
//       if (uniqueStepList.length >= 8) {
//         break;
//       }
//       const isUnique = !uniqueStepList.some((item) => {
//         return item.name === list[j].name;
//       });
//       if (isUnique) {
//         uniqueStepList.push(list[j]);
//         list.splice(j, 1);
//         j--;
//       }
//     }
//     unique8List = [...unique8List, ...uniqueStepList];
//   }
//   list = unique8List;


//   list = sort6recursively(list);

//   return list;
// }

// const sort6recursively = (list) => {
//   const length = list.length;

//   for (let i = 0; i < (length / 6); i++) {
//     const stepList = list.slice(i * 6, (i * 6) + 6);

//     for (let j = 0; j < 6; j++) {
//       const duplicatedItem = stepList.find((item, ind) => {
//         return item.name === stepList[j].name && (ind !== j);
//       });

//       if (duplicatedItem !== undefined) {
//         const ind = (i * 6) + j;
//         const which8OfList = Math.trunc(ind / 8);

//         list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

//         sort6recursively(list);
//       }
//     }
//   }

//   return list;
// }


// let currentPage = 0;
// document.querySelector(".slider-button").addEventListener('click', (e) => {
//   if (currentPage > 0) {
//     currentPage--;
//     console.log(currentPage+1);
//   }
//   document.querySelector(".our-friends-cards").style.rigth= `calc(35px - ${190 * currentPage}px)`;
//   document.querySelector("#currentPage").innerText = (currentPage+1).toString();

// });

// document.querySelector(".slider-button--reverted").addEventListener('click', (e) => {
//   if (currentPage < (document.querySelector(".our-friends-cards").offsetHeight / 190) - 1) {
//     currentPage++;
//     console.log(currentPage+1);
//   }

//   document.querySelector(".our-friends-cards").style.rigth = `calc(35px - ${190 * currentPage}px)`;
//   document.querySelector("#currentPage").innerText = (currentPage+1).toString();
// });

// (fullPetsList / itemsPerPage)

// // const base = 'https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/night/';
// // const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
// const images = list;
// let i = 0;
// function viewBgImage(data) {
//   const body = document.querySelector('body');
//   const src = data;
//   const img = document.createElement('img');
//   img.src = src;
//   img.onload = () => {      
//     body.style.backgroundImage = `url(${src})`;
//   }; 
// }

// function getImage() {
//   const index = i % images.length;
//   const imageSrc = base + images[index];
//   viewBgImage(imageSrc);
//   viewBgImage(imageSrc);
//   viewBgImage(imageSrc);
//   i += 3;
// } 
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', getImage);

// let pets = [];
// let fullPetsList = [];

// const request = new XMLHttpRequest();

// request.open('GET', './pets.json');
// request.onload = () => {console.log(request.response)};
// fetch('./pets.json').then(res => res.json()).then(list => {
//   pets = list;

//   // fullPetsList = (() => {
//   //   let tempArr = [];

//   //   for (let i = 0; i < 6; i++) {
//   //     const newPets = pets;

//   //     for (let j = pets.length; j > 0; j--) {
//   //       let randInt = Math.floor(Math.random() * j);
//   //       const randElem = newPets.splice(randInt, 1)[0];
//   //       newPets.push(randElem);
//   //     }

//   //     tempArr = [...tempArr, ...newPets];
//   //   }
//   //   return tempArr;
//   })();

//   // fullPetsList = sort863(fullPetsList);
  
//   createPets(fullPetsList);

//   request.send();
// const createPets = (petsList) => {
//     const elem = document.querySelector(".our-friends-cards");
//     elem.innerHTML += createElements(petsList);
//   }
  
//   const createElements = (petsList) => {
//     let str = ''
//     for (let i = 0; i < petsList.length; i++) {
//         str += `<div class="our-friends-card description">
//                   <img class="our-friends-card__image" src=" ${petsList[i].img} "  alt="Pet ${petsList[i].name}">
//                   <div class="our-friends-card__content">
//                     <h4 class="our-friends-card__title">
//                         ${petsList[i].name}
//                     </h4>
//                     <button class="our-friends-card__button">
//                         Learn more
//                     </button>
//                   </div>
//                 </div>`;                              
//     }
//     return str;
//   }

//   createPets(pets)

let items = document.querySelectorAll('.slider .our-friends-cardss');



// const sort6recursively = (list) => {
//   const length = list.length;

//   for (let i = 0; i < (length / 6); i++) {
//     const stepList = list.slice(i * 6, (i * 6) + 6);

//     for (let j = 0; j < 6; j++) {
//       const duplicatedItem = stepList.find((item, ind) => {
//         return item.name === stepList[j].name && (ind !== j);
//       });

//       if (duplicatedItem !== undefined) {
//         const ind = (i * 6) + j;
//         const which8OfList = Math.trunc(ind / 8);

//         list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

//         sort6recursively(list);
//       }
//     }
//   }

//   return list;
// }
// alert(JSON.stringify(items))
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

let itemsPerPage = 1;
// const checkItemsPerPage = () => {
//   if (document.querySelector("body").offsetWidth >= 768 && document.querySelector("body").offsetWidth < 1280) {
//     itemsPerPage = 2;

//   } else if (document.querySelector("body").offsetWidth < 768) {
//     itemsPerPage = 1;
//   }
// }

function hideItem(direction) {
  isEnabled = false;
  // checkItemsPerPage();
  // for (let currentItem = 0; currentItem < itemsPerPage; currentItem++) {
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
      this.classList.remove('active', direction);
    });
  // }
}

function showItem(direction) {
  // checkItemsPerPage();
  // for (let currentItem = 0; currentItem < itemsPerPage; currentItem++) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
      this.classList.remove('next', direction);
      this.classList.add('active');
      isEnabled = true;
    });
  // }
}


function nextItem(n) {
  hideItem('to-left');
  // checkItemsPerPage();
	changeCurrentItem(n + itemsPerPage);
	showItem('from-right');
}

function previousItem(n) {
  hideItem('to-right');
  // checkItemsPerPage();
	changeCurrentItem(n - itemsPerPage);
	showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

const swipedetect = (el) => {
  
	let surface = el;
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

	surface.addEventListener('mousedown', function(e){
		startX = e.pageX;
		startY = e.pageY;
		startTime = new Date().getTime();
		e.preventDefault();
	}, false);

	surface.addEventListener('mouseup', function(e){
		distX = e.pageX - startX;
		distY = e.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime <= allowedTime){
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
				if ((distX > 0)) {
					if (isEnabled) {
						previousItem(currentItem);
					}
				} else {
					if (isEnabled) {
						nextItem(currentItem);
					}
				}
			}
		}
		e.preventDefault();
	}, false);

	surface.addEventListener('touchstart', function(e){
		if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
			if (e.target.classList.contains('left')) {
				if (isEnabled) {
					previousItem(currentItem);
				}
			} else {
				if (isEnabled) {
					nextItem(currentItem);
				}
			}
		}
			var touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {
								if (isEnabled) {
									previousItem(currentItem);
								}
							} else {
								if (isEnabled) {
									nextItem(currentItem);
								}
							}
					}
			}
			e.preventDefault();
	}, false);
}

var el = document.querySelector('.slider');
swipedetect(el);


// const menuIcon = document.querySelector('.burger');

// const navbar = document.querySelector('.navbar');

// menuIcon.addEventListener('click', () => {
//   navbar.classList.toggle(".change")
// });

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach( button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})

closeModalButtons.forEach( button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  })
})

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}















// const openModalButtonsX = document.querySelectorAll('[data-modalX-target]');
// const closeModalButtonsX = document.querySelectorAll('[data-close-buttonX]');
// const overlayX = document.getElementById('overlayX');

// openModalButtonsX.forEach( button => {
//   button.addEventListener('click', () => {
//     const modalX = document.querySelector(button.dataset.modalXTarget);
//     openModalX(modalX);
//   })
// })

// overlayX.addEventListener('click', () => {
//   const modalsX = document.querySelectorAll('.modalX.active');
//   modalsX.forEach(modalX => {
//     closeModalX(modalX);
//   })
// })

// closeModalButtonsX.forEach( button => {
//   button.addEventListener('click', () => {
//     const modalX = button.closest('.modalX');
//     closeModalX(modalX);
//   })
// })

// function openModalX(modalX) {
//   if (modalX == null) return;
//   modalX.classList.add('activeX');
//   overlayX.classList.add('activeX');
// }

// function closeModalX(modalX) {
//   if (modalX == null) return;
//   modalX.classList.remove('activeX');
//   overlayX.classList.remove('activeX');
// }

// const openModalButtons = document.querySelectorAll('[data-modal-target]');
// const closeModalButtons = document.querySelectorAll('[data-close-button]');
// const overlay = document.getElementById('overlay');

// openModalButtons.forEach( button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget);
//     openModal(modal);
//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active');
//   modals.forEach(modal => {
//     closeModal(modal);
//   })
// })

// closeModalButtons.forEach( button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal');
//     closeModal(modal);
//   })
// })

// function openModal(modal) {
//   if (modal == null) return;
//   modal.classList.add('active');
//   overlay.classList.add('active');
// }

// function closeModal(modal) {
//   if (modal == null) return;
//   modal.classList.remove('active');
//   overlay.classList.remove('active');
// }

// function myFunctionX(x) {
//   x.classList.toggle("change");
// }

// document.querySelector('.burger').addEventListener('click', function(){
//   document.querySelector('.burger span').classList.toggle('active');
// })
// document.querySelector('.menu').classList.toggle("animate");

var x = document.getElementById("burger");

x.addEventListener("click", myFunction);

function myFunction(x) {
  var element = document.getElementById("nav");
  element.classList.toggle("open");
  
  x.classList.toggle("change");
}