function myFunction() {
  const token = 'f7LJVzKdyizLIAJoEaaWg6iaihSnN6fQqdLkgxlh8uU';
  const lineNotifyApi = 'https://notify-api.line.me/api/notify';

  let message = '\nテスト投稿です';

  const options =
   {
      "method"  : "post",
      "payload" : {"message": message},
      "headers" : {"Authorization":"Bearer " + token}
   };

   UrlFetchApp.fetch(lineNotifyApi, options);

}
