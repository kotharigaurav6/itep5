import java.util.Scanner;
class Demo
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Source : ");
        String source = sc.next();

        System.out.println("Enter Destination : ");
        String destination = sc.next();
         
        System.out.println("Enter date(DD/MM/YYYY) : ");
        String date = sc.next();
         
        System.out.println("Enter Day\n1 for WeekDays\n2 for WeekEnds : ");
        int day= sc.nextInt();

        if(day==2)
        {
            System.out.println("No Booking Accepted..Thank You");    
            System.exit(0);
        } 

        System.out.println("Enter Time(HH:MM:AM/PM) : ");
        String time = sc.next();
        
        int scitizen_price=0; 
                System.out.println("\nEnter No. of males : ");
                int male = sc.nextInt();
                System.out.println("Enter No. of females : ");
                int female = sc.nextInt();
                System.out.println("Enter No. of children : ");
                int children = sc.nextInt();
                
                System.out.println("Enter No. of senior citizen members: ");
                int s_citizen = sc.nextInt();
                
        System.out.println("---Select Vehicle Type---");
        System.out.println("1 for Bus");
        System.out.println("2 for Train");
        System.out.println("3 for Flight");

        System.out.println("\nSelect Option : ");
        int vehicle_type = sc.nextInt();

        switch(vehicle_type)
        {
            case 1 :
            {
                System.out.println("----Welcome to Chartered Bus Service----");
                System.out.println("Enter Price for adults : ");
                int adult_price = sc.nextInt();

                if(s_citizen>0)
                {
                    System.out.println("Enter Price for senior citizen : ");
                    scitizen_price = sc.nextInt();
                }
                System.out.println("Enter Price for children : ");
                int children_price = sc.nextInt();

                int amount = (male+female-s_citizen)*adult_price + s_citizen*scitizen_price +children*children_price;
                System.out.println("Total Amount : "+amount);
                break;                
            }
            case 2 :
            {
                System.out.println("----Welcome to Indian Railways----");                
                System.out.println("Enter Price for adults : ");
                int adult_price = sc.nextInt();

                if(s_citizen>0)
                {
                    System.out.println("Enter Price for senior citizen : ");
                    scitizen_price = sc.nextInt();
                }
                System.out.println("Enter Price for children : ");
                int children_price = sc.nextInt();

                int amount = (male+female-s_citizen)*adult_price + s_citizen*scitizen_price +children*children_price;
                System.out.println("Total Amount : "+amount);
                break;                
            }
            case 3 :
            {
                System.out.println("----Welcome to Indigo Airlines----");
                System.out.println("Enter Price for adults : ");
                int adult_price = sc.nextInt();

                if(s_citizen>0)
                {
                    System.out.println("Enter Price for senior citizen : ");
                    scitizen_price = sc.nextInt();
                }
                System.out.println("Enter Price for children : ");
                int children_price = sc.nextInt();

                int amount = (male+female-s_citizen)*adult_price + s_citizen*scitizen_price +children*children_price;
                System.out.println("Total Amount : "+amount);
                break;                
            }
            default : 
                System.out.println("You selected Invalid Option");
                break;
        }
    }
}