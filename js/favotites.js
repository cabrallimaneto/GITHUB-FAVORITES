export class Favorites {
  constructor(root){
    
    this.root = document.querySelector(root)
    this.load()

  }

  load() {
    this.entries = [
      {
        login: 'cabrallimaneto',
        name: 'cabral lima',
        public_repos: '13',
        followers: '10'
      },
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '76',
        followers: '120000'
      }
    ]
  }

  delete(user){
    const filteredEntries = this.entries
    .filter(entry => entry.login !== user.login)

    console.log(filteredEntries)
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update(){
    this.removeAllTr()

    this.entries.forEach( user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de perfil do ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar essa linha?')
        if(isOk){
          this.delete(user)
        }
      }


      this.tbody.append(row)
    })


  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `                    
      <td class="user">
          <img
              src="https://github.com/cabrallimaneto.png"
              alt="Imagem de Cabral Lima"
          />
          <a
              href="https://github.com/cabrallimaneto"
              target="_blank"
          >
              <p>Cabral Lima</p>
              <span>cabrallima</span>
          </a>
      </td>
      <td class="repositories">11</td>
      <td class="followers">30</td>
      <td>
          <button class="remove">&times;</button>
      </td>
    `
    return tr
  }

  removeAllTr(){
    this.tbody.querySelectorAll('tr')
    .forEach((tr) => {
      tr.remove()
    })


  }

}