import { MESSENGER_URL } from '../../constants'

export function MessengerButton() {
  return (
    <a
      className="messenger-button"
      href={MESSENGER_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Order Ilocos Empanada on Messenger"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.25c-4.83 0-8.75 3.56-8.75 7.95 0 2.5 1.27 4.72 3.26 6.17v3.38l3.35-1.84c.68.16 1.4.24 2.14.24 4.83 0 8.75-3.56 8.75-7.95S16.83 3.25 12 3.25Z" />
        <path d="m7.55 13.95 3.04-3.23 2.35 1.72 3.52-3.23-3.04 3.23-2.35-1.72-3.52 3.23Z" />
      </svg>
      <span>Order on Messenger</span>
    </a>
  )
}
