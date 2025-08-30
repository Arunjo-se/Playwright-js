import { test } from "@playwright/test";
import RandomDataUtils from "../../utils/randomDataUtils";

test.skip("Generate Random Data", async () => {
  const randomString = RandomDataUtils.randomString(10);
  console.log("Random String:", randomString);

  const randomNumber = RandomDataUtils.randomNumber(1000, 9999);
  console.log("Random Number:", randomNumber);

  const randomEmail = RandomDataUtils.randomEmail(6);
  console.log("Random Email:", randomEmail);

  const randomPhone = RandomDataUtils.randomPhoneNumber(7);
  console.log("Random Phone Number:", randomPhone);

  const randomAddress = RandomDataUtils.randomAddress(15);
  console.log("Random Address:", randomAddress);

  console.log(RandomDataUtils.randomUsername(7));
});

test("Generate Random Dates in different formats", async () => {
  console.log(
    "MM/DD/YYYY:",
    RandomDataUtils.randomDate(
      new Date(2025, 0, 1),
      new Date(2025, 0, 10),
      "MM/DD/YYYY"
    )
  );
  console.log(
    "DD/MM/YYYY:",
    RandomDataUtils.randomDate(
      new Date(2015, 0, 1),
      new Date(2022, 0, 1),
      "DD/MM/YYYY"
    )
  );
  console.log(
    "YYYY/MM/DD:",
    RandomDataUtils.randomDate(
      new Date(2005, 0, 1),
      new Date(2020, 0, 1),
      "YYYY/MM/DD"
    )
  );
});
