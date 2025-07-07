import{test, expect} from'@playwright/test'

//only
// test.only('test1',async({page})=>
// {
// console.log("this is test1...");
// })

//skip
// test.skip('test2',async({page})=>
// {
// console.log("this is test2...");
// })

//fixme
// test('test3',async({page})=>
// {
//     test.fixme()
// console.log("this is test3...");
// })

//fail
// test('test4',async({page,browserName})=>
// {
// console.log("this is test4...");
// if(browserName==='firefox')
// {
// test.fail()
// }
// })



test('test5',async({page})=>
{
    test.slow()
await page.goto('https://www.youtube.com/');
console.log("this is test5...");

})