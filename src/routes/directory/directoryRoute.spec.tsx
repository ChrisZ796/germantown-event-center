
import { vi } from 'vitest';

vi.mock('@services/users/get-user-info.service.ts', () => (
    {
  getUserInfo: vi.fn()
    }
));