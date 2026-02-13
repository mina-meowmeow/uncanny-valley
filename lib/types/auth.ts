import { UserData } from '../contexts/sessionsContext';

export type LoginResponse = {
	message?: string;
	sessionId?: string;
	userData?: UserData;
} | null;
