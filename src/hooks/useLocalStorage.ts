import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item && item !== '' && item !== 'undefined' && item !== 'null') {
        try {
          const parsed = JSON.parse(item)
          setStoredValue(parsed)
        } catch (parseError) {
          console.error('Error parsing localStorage item:', parseError)
          // Clear corrupted data
          window.localStorage.removeItem(key)
        }
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error)
    }
  }, [key])

  // Return a wrapped version of useState's setter function that persists to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }

  return [storedValue, setValue] as const
}
