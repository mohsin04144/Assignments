import java.util.TreeMap;
import java.util.*;
public class CollectionAssignmentQ1 {
	public static void main(String[] args)
	{
		TreeMap<Long,String> contact=new TreeMap<>();
		contact.put((long) 995478217, "Akash");
		contact.put((long) 986478521, "Balas");
		contact.put((long) 912547856, "Basha");
		contact.put((long) 987455255, "kishore");
		System.out.println(contact.keySet());
		System.out.println(contact.values());
		System.out.println(contact);
	}
}