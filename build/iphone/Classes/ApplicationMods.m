#import "ApplicationMods.h"

@implementation ApplicationMods

+ (NSArray*) compiledMods
{
	NSMutableArray *modules = [NSMutableArray array];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"imageview_ex",@"name",@"com.obscure.imageview_ex",@"moduleid",@"2.0",@"version",@"83b10f21-8188-483b-8332-d95ba06abafa",@"guid",@"",@"licensekey",nil]];
	return modules;
}

@end
