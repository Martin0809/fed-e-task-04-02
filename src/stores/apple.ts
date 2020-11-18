import { observable, computed, action, runInAction } from 'mobx'

interface Apple {
  id: number
  weight: number
  isEaten: boolean
}

export default class AppleStore {
  @observable apples: Apple[] = []
  @observable isPicking: boolean = false

  @computed
  get buttonText() {
    return this.isPicking ? '正在采摘...' : '摘苹果'
  }

  @computed
  get notEatenApple() {
    return this.apples.filter((apple) => !apple.isEaten)
  }

  @computed
  get notEatenQuantity() {
    return this.notEatenApple.length
  }

  @computed
  get notEatenWeight() {
    return this.notEatenApple.reduce(
      (sum, curr) => (sum = sum + curr.weight),
      0
    )
  }

  @computed
  get eatenApple() {
    return this.apples.filter((apple) => apple.isEaten)
  }

  @computed
  get eatenQuantity() {
    return this.eatenApple.length
  }

  @computed
  get eatenWeight() {
    return this.eatenApple.reduce((sum, curr) => (sum = sum + curr.weight), 0)
  }

  @action.bound
  async pickApple() {
    runInAction(() => {
      this.isPicking = true
    })

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })

    runInAction(() => {
      this.apples.push({
        id: this.apples.length + 1,
        weight: Math.ceil(200 + Math.random() * 100 + Math.random() * 10),
        isEaten: false,
      })
      this.isPicking = false
    })
  }

  @action.bound
  eatApple(id: number) {
    const index = this.apples.findIndex((apple) => apple.id === id)

    this.apples[index].isEaten = true
  }
}
