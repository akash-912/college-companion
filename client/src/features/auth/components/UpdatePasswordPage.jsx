import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/supabase'; 
import { Button } from '../../../components/ui/Button.jsx';
import { Input } from '../../../components/ui/Input.jsx';
import { Label } from '../../../components/ui/Label.jsx';
import { Card } from '../../../components/ui/Card.jsx';
import { Lock, LogOut } from 'lucide-react';

export function UpdatePasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    // 1. Validation
    if (password !== confirmPassword) {
      setErrorMsg("Passwords don't match");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    try {
      // 2. Update the password in Supabase
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) throw error;

      // 3. UNLOCK THE APP: Remove the lock from local storage
      // This is the only way to escape the "Recovery Mode" loop successfully
      localStorage.removeItem('recovery_pending'); 

      // 4. CRITICAL: Log the user out immediately!
      // This prevents them from accessing the dashboard with the "Recovery Session"
      await supabase.auth.signOut();

      // 5. Redirect to Login Page with a success message
      navigate('/', { 
        state: { 
          successMessage: 'Password updated successfully! Please login with your new password.' 
        },
        replace: true 
      });

    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Allow user to abort the process safely
  const handleCancel = async () => {
    localStorage.removeItem('recovery_pending');
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20 z-0"></div>
      
      <Card className="w-full max-w-md p-8 shadow-xl border-border bg-card/50 backdrop-blur-sm relative z-10">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Set New Password</h2>
          <p className="text-muted-foreground mt-2">
            Please enter your new password below to secure your account.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 text-destructive rounded-md text-sm text-center font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleUpdatePassword} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input
              id="new-password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="bg-background"
            />
          </div>

          <Button type="submit" className="w-full mt-2" size="lg" disabled={isLoading}>
            {isLoading ? 'Updating...' : 'Update Password & Logout'}
          </Button>

          {/* Cancel Button in case they want to quit */}
          <button 
            type="button" 
            onClick={handleCancel}
            className="w-full text-center text-sm text-muted-foreground hover:text-foreground mt-4 flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" /> Cancel & Return to Login
          </button>
        </form>
      </Card>
    </div>
  );
}