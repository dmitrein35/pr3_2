const $btnKick = document.getElementById('btn-kick');
const $btnSpecial = document.getElementById('btn-special');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character'),
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
  changeHP: changeHP,
};

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy'),
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
  changeHP: changeHP,
};

$btnKick.addEventListener('click', function () {
  makeAttack(20, 20);
});

$btnSpecial.addEventListener('click', function () {
  makeAttack(15, 35);
});

function makeAttack(maxCharDamage, maxEnemyDamage) {
  character.changeHP(random(maxCharDamage));
  enemy.changeHP(random(maxEnemyDamage));
}

function disableButtons() {
  $btnKick.disabled = true;
  $btnSpecial.disabled = true;
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function init() {
  character.renderHP();
  enemy.renderHP();
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressbarHP();
}

function renderHPLife() {
  this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
  const percentage = (this.damageHP / this.defaultHP) * 100;
  
  this.elProgressbar.style.width = percentage + '%';
  this.elProgressbar.classList.remove('low', 'critical');

  if (percentage < 20) {
    this.elProgressbar.classList.add('critical');
  } else if (percentage < 60) {
    this.elProgressbar.classList.add('low');
  }
}

function changeHP(count) {
  if (this.damageHP < count) {
    this.damageHP = 0;
    alert('Бедный ' + this.name + ' проиграл бой!');
    disableButtons();
  } else {
    this.damageHP -= count;
  }

  this.renderHP();
}

init();