export const checkLoanEligibility = (creditScore: number, loanAmount: number): boolean => {
    return creditScore > 650 && loanAmount < 50000; 
  };
  