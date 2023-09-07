import { setActivePinia, createPinia } from "pinia"
import { useTodoStore } from "../store/todo"

describe('Todo Store', () => { 
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should fetch todos', async () => {
    const store = useTodoStore()
    const todos = await store.fetchTodos()
    expect(todos).toEqual([])
  })
 })