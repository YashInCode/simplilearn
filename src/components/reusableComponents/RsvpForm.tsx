import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

interface RsvpFormProps {
  email: string;
  emailStored: boolean;
  isLoading: boolean;
  message: string;
  messageType: 'success' | 'error' | '';
  onEmailChange: (email: string) => void;
  onRsvpNow: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSendRsvp: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel: () => void;
  inputBgColor?: string;
  buttonColor?: string;
  textColor?: 'light' | 'dark';
  isFooter?: boolean;
}

export default function RsvpForm({
  email,
  emailStored,
  isLoading,
  message,
  messageType,
  onEmailChange,
  onRsvpNow,
  onSendRsvp,
  onCancel,
  inputBgColor = 'bg-white',
  buttonColor = '#F5AB40E5',
  textColor = 'dark',
  isFooter = false,
}: RsvpFormProps) {
  const textClasses = textColor === 'light' ? 'text-gray-100' : 'text-gray-700';
  const emailDisplayClass = textColor === 'light' ? 'text-white' : 'text-gray-900';
  const messageContainerClass = 'mt-5 p-4 rounded-lg text-sm font-medium flex items-center gap-3 animate-fadeIn shadow-lg';

  return (
    <div>
      {!emailStored ? (
        <div className="flex flex-col sm:flex-row gap-3 max-w-3xl">
          <div
            className={`${
              isFooter ? 'flex-1 px-6 py-3 rounded flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-400' : 'flex-1 flex items-center gap-3 border px-6 py-4 border-gray-300 rounded-lg'
            } ${!isFooter ? inputBgColor : ''}`}
          >
            {!isFooter && <Mail className="text-gray-300" />}
            {isFooter && <Mail className="text-white flex-shrink-0" size={20} />}
            <input
              type="email"
              required
              className={`${
                isFooter ? 'flex-1 bg-transparent text-white placeholder-gray-200' : 'w-full border-none outline-none placeholder-gray-400 bg-transparent text-gray-900'
              } outline-none`}
              placeholder="Enter your work email to confirm your attendance"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  onRsvpNow(e as any);
                }
              }}
            />
          </div>
          <button
            onClick={onRsvpNow}
            disabled={isLoading}
            className="text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: buttonColor }}
          >
            {isLoading ? 'Loading...' : 'RSVP Now'}
          </button>
        </div>
      ) : (
        <div className="space-y-4 max-w-3xl">
          <div className={`${textClasses} text-lg`}>
            You may RSVP by emailing <span className={`font-bold ${emailDisplayClass}`}>{email}</span>
            <br />
            or by clicking the button below to send your confirmation.
          </div>
          <div className="flex gap-3">
            <button
              onClick={onSendRsvp}
              disabled={isLoading}
              className="text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: buttonColor }}
            >
              {isLoading ? 'Sending...' : 'Send RSVP Email'}
            </button>
            <button
              onClick={onCancel}
              disabled={isLoading}
              className={`font-semibold px-6 py-3 rounded-lg border transition-colors whitespace-nowrap ${
                textColor === 'light'
                  ? 'text-gray-200 border-gray-300 hover:bg-gray-800'
                  : 'text-gray-600 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Back
            </button>
          </div>
        </div>
      )}

      {message && (
        <div
          className={`${messageContainerClass} ${
            messageType === 'success'
              ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
              : 'bg-gradient-to-r from-red-500 to-rose-500 text-white'
          }`}
        >
          {messageType === 'success' ? (
            <CheckCircle size={20} className="flex-shrink-0" />
          ) : (
            <AlertCircle size={20} className="flex-shrink-0" />
          )}
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
