import java.util.HashSet;

public class CollectionAssignmentQ2 {
	public static void main(String[] args)
	{
		HashSet<String> hs=new HashSet<>();
		hs.add("Akash");
		hs.add("Balas");
		hs.add("Kishore");
		hs.add("Basha");
		hs.add("Nusair");
		
		System.out.println("Original");
		System.out.println(hs);
		System.out.println(hs.size());
		
		hs.add("yuvan");
		hs.add("vijay");
		
		System.out.println("After adding duplicate elements");
		System.out.println(hs);
		System.out.println(hs.size());
	}

}