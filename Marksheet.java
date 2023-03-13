// program to print Marksheet
import java.util.Scanner;
class Marksheet
{
    public static void main(String args[])
    {
        String sem1subjects[] = {"C","C++","DS","JAVA","OS","C_Prac","C++_Prac"};
        String sem2subjects[] = {"C2","C++2","DS2","JAVA2","OS2","C_Prac2","C++_Prac2"};
        
        int sem1marks[]=new int[7];
        int sem2marks[]=new int[7];
        
        int count_sem1atkt,count_sem2atkt;
        Scanner sc = new Scanner(System.in);
        do
        {
            boolean sem1atkt[] = new boolean[7];
            boolean sem2atkt[] = new boolean[7];
            count_sem1atkt=0;
            count_sem2atkt=0;
        /* First semester starts */    
            System.out.println("Enter marks of 1st semester : ");
            for(int i=0;i<sem1subjects.length;i++)
            {
                if(i<5)
                {
                    System.out.println("Enter "+sem1subjects[i]+" marks : ");
                    sem1marks[i] = sc.nextInt();
                    if(sem1marks[i]<0 || sem1marks[i]>100)
                    {
                        System.out.println("--Invalid marks--Please Re-Enter--");
                        i--;
                        continue;
                    }
                    if(sem1marks[i]<33)
                    {
                        count_sem1atkt++;
                        sem1atkt[i]=true;
                    }
                }
                else
                {
                    System.out.println("Enter "+sem1subjects[i]+" marks : ");
                    sem1marks[i] = sc.nextInt();
                    if(sem1marks[i]<0 || sem1marks[i]>25)
                    {
                        System.out.println("--Invalid marks--Please Re-Enter--");
                        i--;
                        continue;
                    }
                    if(sem1marks[i]<13)
                    {
                        count_sem1atkt++;
                        sem1atkt[i]=true;
                    }
                }
            }
            System.out.println("You have "+count_sem1atkt+" ATKT in 1st Semester");
        /* First semester ends */    
        /* First semester atkt starts */
            for(int i=0;i<sem1atkt.length;i++)
            {
                if(sem1atkt[i])
                {
                    if(i<5)
                    {
                        System.out.println("Enter "+sem1subjects[i]+" atkt marks : ");
                        sem1marks[i] = sc.nextInt();
                        if(sem1marks[i]<0 || sem1marks[i]>100)
                        {
                            System.out.println("--Invalid marks--Please Re-Enter--");
                            i--;
                            continue;
                        }
                        if(sem1marks[i]>=33)
                        {
                            count_sem1atkt--;
                            sem1atkt[i]=false;
                        }
                        if(sem1marks[i]<33)
                            sem1atkt[i]=true;
                    }
                    else
                    {
                        System.out.println("Enter "+sem1subjects[i]+" atkt marks : ");
                        sem1marks[i] = sc.nextInt();
                        if(sem1marks[i]<0 || sem1marks[i]>25)
                        {
                            System.out.println("--Invalid marks--Please Re-Enter--");
                            i--;
                            continue;
                        }
                        if(sem1marks[i]>=13)
                        {
                            count_sem1atkt--;
                            sem1atkt[i]=false;
                        }
                        if(sem1marks[i]<13)
                            sem1atkt[i]=true;
                    }
                }    
            }
        /* First semester atkt ends*/

        /* Second Semester exam starts */
            System.out.println("\nEnter marks of 2nd semester : ");
            for(int i=0;i<sem2subjects.length;i++)
            {
                if(i<5)
                {
                    System.out.println("Enter "+sem2subjects[i]+" marks : ");
                    sem2marks[i] = sc.nextInt();
                    if(sem2marks[i]<0 || sem2marks[i]>100)
                    {
                        System.out.println("--Invalid marks--Please Re-Enter--");
                        i--;
                        continue;
                    }
                    if(sem2marks[i]<33)
                    {
                        count_sem2atkt++;
                        sem2atkt[i]=true;
                    }
                }
                else
                {
                    System.out.println("Enter "+sem2subjects[i]+" marks : ");
                    sem2marks[i] = sc.nextInt();
                    if(sem2marks[i]<0 || sem2marks[i]>25)
                    {
                        System.out.println("--Invalid marks--Please Re-Enter--");
                        i--;
                        continue;
                    }
                    if(sem2marks[i]<13)
                    {
                        count_sem2atkt++;
                        sem2atkt[i]=true;
                    }
                }
            }
            System.out.println("You have "+count_sem2atkt+" ATKT in 2nd Semester");
        /* Second semester exam ends */
        System.out.println("After 2nd semester You have "+count_sem1atkt+" ATKT in 1st Semester");
        if(count_sem1atkt+count_sem2atkt >4)
        {
            System.out.println("\n***Year Back***\n");
            continue;
        }
        else{
            /* Third semester starts*/
                /* First sem atkt */
                /* Second sem atkt */
                System.out.println("Promoted to 3rd Semester");
            /* Third semester ends */ 
        }

        }while((count_sem1atkt+count_sem2atkt)>4);

    }
}