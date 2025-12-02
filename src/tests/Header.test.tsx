import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'
import "@testing-library/jest-dom";

// Mock do next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

describe('Header Component', () => {
  it('renders logo and navigation links', () => {
    render(<Header />)
    
    expect(screen.getByText('CI/CD App')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Sobre')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })

  it('has correct links', () => {
    render(<Header />)
    
    const homeLink = screen.getByText('Home')
    const aboutLink = screen.getByText('Sobre')
    const contactLink = screen.getByText('Contato')
    
    expect(homeLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
  })
})