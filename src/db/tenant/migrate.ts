import { pushToTenantDb } from ".";
import { db } from "../primary";

const organizations = await db.query.organizations.findMany();

for (const org of organizations) {
  await pushToTenantDb({
    dbName: org.database_name,
    authToken: org.database_auth_token,
    input: true,
  });

  console.log("Pushed to tenant DB", org.database_name);
}
