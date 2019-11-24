@interface TestClass

@property (nonatomic, readonly) NSString *testProperty;

-(void)testMethod;
-(void)testMethodWithParameter:(NSString *)test;
-(void)testMethodWithParameter:(NSString *)test withSecond:(NSString *)test2;
+(void)testStaticMethod;

@end
