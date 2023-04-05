// program showing the concept of multilevel inheritance
class Account{
    int age;
    String name;
        Account(int age,String name){
            this.age=age;
            this.name=name;
        }
        void getAccountDetails()
        {
            System.out.println("Name : "+name+"\nAge : "+age);
        }
}
class Balance extends Account{
    int bal;
        Balance(int age,String name,int bal){
            super(age,name);
            this.bal=bal;
        }
        void getBalance()
        {
            getAccountDetails();
            System.out.println("\nBalance : "+bal);
        }
}
class Transaction extends Balance{
    int wamt,damt;
        Transaction(int bal,int wamt,int damt,String name,int age){
            super(age,name,bal);
            this.wamt=wamt;
            this.damt=damt;
        }
        void getDetails()
        {
            getBalance();
            System.out.println("\nDeposit amount : "+damt);
            System.out.println("Withdrawal amount : "+wamt);
            System.out.println("\nTotal Balance : "+(bal-wamt+damt));
        }
}
class Inheritance4{
    public static void main(String args[])
    {
        Transaction obj = new Transaction(20000,10000,2300,"Jackson Jack",54);
        obj.getDetails();
    }
}