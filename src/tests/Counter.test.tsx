import { render, screen, fireEvent } from '@testing-library/react'
import Counter from '@/components/Counter'
import "@testing-library/jest-dom";

describe('Counter Component', () => {
  it('renders counter with initial value 0', () => {
    render(<Counter />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('increments counter when increment button is clicked', () => {
    render(<Counter />)
    const incrementButton = screen.getByText('Incrementar')
    
    fireEvent.click(incrementButton)
    expect(screen.getByText('1')).toBeInTheDocument()
    
    fireEvent.click(incrementButton)
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('decrements counter when decrement button is clicked', () => {
    render(<Counter />)
    const incrementButton = screen.getByText('Incrementar')
    const decrementButton = screen.getByText('Decrementar')
    
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton) // Count = 2
    fireEvent.click(decrementButton) // Count = 1
    
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('resets counter to 0 when reset button is clicked', () => {
    render(<Counter />)
    const incrementButton = screen.getByText('Incrementar')
    const resetButton = screen.getByText('Resetar')
    
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    fireEvent.click(resetButton)
    
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})