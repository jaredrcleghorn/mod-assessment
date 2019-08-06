export default class MainClasses {
  constructor() {
    [
      ['A', 'General Works'],
      ['B', 'Philosophy, Psychology, Religion'],
      ['C', 'Auxiliary Sciences of History'],
      ['D', 'World History and History of Europe, Asia, Africa, Australia, New Zealand, etc.'],
      ['E', 'History of the Americas'],
      ['F', 'History of the Americas'],
      ['G', 'Geography, Anthropology, Recreation'],
      ['H', 'Social Sciences'],
      ['J', 'Political Science'],
      ['K', 'Law'],
      ['L', 'Education'],
      ['M', 'Music and Books on Music'],
      ['N', 'Fine Arts'],
      ['P', 'Language and Literature'],
      ['Q', 'Science'],
      ['R', 'Medicine'],
      ['S', 'Agriculture'],
      ['T', 'Technology'],
      ['U', 'Military Science'],
      ['V', 'Naval Science'],
      ['Z', 'Bibliography, Library Sciecne, Information Resources (General)']
    ].forEach((pair: Array<string>) => {
      this[pair[0]] = {
        caption: pair[1],
        counts: {}
      };
    });
  }

  clearCounts(): void {
    Object.values(this).forEach((mainClass: any) => { mainClass.counts = {}; });
  }
}
