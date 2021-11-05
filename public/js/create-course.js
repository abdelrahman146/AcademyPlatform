function getClosestElement(container, childClass, y_position) {
  const elements = Array.from(container.querySelectorAll(`.${childClass}:not(.dragging)`));
  return elements.reduce(
    (closestEl, element) => {
      const box = element.getBoundingClientRect();
      const offset = y_position - box.top - box.height / 2;
      if (offset < 0 && offset > closestEl.offset) {
        return { offset, element };
      } else {
        return closestEl;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

class LectureForm {
  constructor(type) {
    this.element = this.createFormModal(type);
    this.createListeners();
  }
  createListeners() {
    const thisModal = this;
    this.element.querySelector('.close-form').addEventListener('click', this.close.bind(thisModal));
    this.element.querySelector('.save-form').addEventListener('click', this.save.bind(thisModal));
    window.addEventListener('click', (e) => {
      if (e.target === this.element) {
        this.close();
      }
    });
    // this.element.querySelector('.cancel').addEventListener('click', this.cancel.bind(thisModal));
    // this.element.querySelector('.save').addEventListener('click', this.save.bind(thisModal));
  }
  createFormModal(type) {
    switch (type) {
      case 'video':
        return document.getElementById('video-lecture-form').content.cloneNode(true).querySelector('.modal');
      // case 'article':
      //   return document.getElementById('article-lecture-form').content.cloneNode(true).querySelector('.modal');
      // case 'quiz':
      //   return document.getElementById('quiz-lecture-form').content.cloneNode(true).querySelector('.modal');
      // case 'stream':
      //   return document.getElementById('stream-lecture-form').content.cloneNode(true).querySelector('.modal');
    }
  }
  close() {
    this.element.style.display = 'none';
  }
  cancel() {
    this.element.style.display = 'none';
  }
  save() {
    this.element.style.display = 'none';
  }
  open() {
    console.dir(this.element);
    this.element.style.display = 'block';
  }
}

class Draggable {
  constructor(element) {
    this.element = element;
    this.createDraggableListeners();
  }
  createDraggableListeners() {
    const thisDraggable = this;
    this.element.querySelector('.drag-handle').addEventListener('mousedown', this.toggleDraggable.bind(thisDraggable));
    this.element.querySelector('.drag-handle').addEventListener('mouseup', this.toggleDraggable.bind(thisDraggable));
    this.element.addEventListener('dragstart', this.dragStart.bind(thisDraggable));
    this.element.addEventListener('dragend', this.dragEnd.bind(thisDraggable));
  }
  toggleDraggable(e) {
    this.element.draggable = !this.element.draggable;
  }
  dragStart(e) {
    e.stopImmediatePropagation();
    this.element.style.opacity = 0.5;
    this.element.classList.add('bg-light', 'dragging');
  }
  dragEnd(e) {
    e.stopImmediatePropagation();
    this.element.style.opacity = 1;
    this.element.classList.remove('bg-light', 'dragging');
    this.element.draggable = false;
  }
}

class Lecture extends Draggable {
  constructor(type) {
    super(document.getElementById('lecture-template').content.cloneNode(true).querySelector('.lecture'));
    this.form = new LectureForm(type);
    this.element.appendChild(this.form.element);
    this.element.querySelector('.lesson-title').innerHTML = type + ' Lecture';
    this.element.querySelector('.type').innerHTML = type;
    this.createListeners();
    this.form.open();
  }
  createListeners() {
    const thisLecture = this;
    this.element.querySelector('.delete-lecture-btn').addEventListener('click', this.destroy.bind(thisLecture));
    this.element.querySelector('.edit-lecture-btn').addEventListener('click', () => this.form.open());
  }
  destroy() {
    this.element.remove();
  }
}

class Module extends Draggable {
  constructor() {
    super(document.getElementById('module-template').content.cloneNode(true).querySelector('.module'));
    this.createListeners();
  }
  createListeners() {
    const thisModule = this;
    this.element.querySelector('.module-lectures').addEventListener('dragover', this.handleDragOver.bind(thisModule));
    this.element.querySelector('.add-video-btn').addEventListener('click', this.createLesson.bind(thisModule, 'video'));
    this.element.querySelector('.add-quiz-btn').addEventListener('click', this.createLesson.bind(thisModule, 'quiz'));
    this.element.querySelector('.add-article-btn').addEventListener('click', this.createLesson.bind(thisModule, 'article'));
    this.element.querySelector('.add-stream-btn').addEventListener('click', this.createLesson.bind(thisModule, 'stream'));
    this.element.querySelector('.delete-module-btn').addEventListener('click', this.destroy.bind(thisModule));
  }
  handleDragOver(e) {
    const draggable = document.querySelector('.dragging');
    if (draggable.classList.contains('lecture')) {
      e.preventDefault();
      const elementAfter = getClosestElement(this.element, 'lecture', e.clientY);
      if (elementAfter) {
        this.element.querySelector('.module-lectures').insertBefore(draggable, elementAfter);
      } else {
        this.element.querySelector('.module-lectures').appendChild(draggable);
      }
    }
  }
  createLesson(type) {
    const lecture = new Lecture(type);
    this.element.querySelector('.module-lectures').appendChild(lecture.element);
  }
  destroy() {
    this.element.remove();
  }
}

class Course {
  constructor(parentID) {
    const parent = document.getElementById(parentID);
    const modulesListContainer = document.getElementById('modules-list-template').content.cloneNode(true);
    this.element = modulesListContainer.querySelector('#modules-list');
    parent.appendChild(modulesListContainer);
    this.createListeners();
  }
  createListeners() {
    const thisCourse = this;
    document.querySelector('#add-module-btn').addEventListener('click', this.createNewModule.bind(thisCourse));
    this.element.addEventListener('dragover', this.handleDragOver.bind(thisCourse));
  }
  createNewModule(e) {
    const module = new Module();
    this.element.appendChild(module.element);
  }
  handleDragOver(e) {
    const draggable = document.querySelector('.dragging');
    if (draggable.classList.contains('module')) {
      e.preventDefault();
      const elementAfter = getClosestElement(this.element, 'module', e.clientY);
      if (elementAfter) {
        this.element.insertBefore(draggable, elementAfter);
      } else {
        this.element.appendChild(draggable);
      }
    }
  }
}

new Course('modules-parent');