// Reference: https://www.digitalocean.com/community/tutorials/angular-environment-variables
export const environment = {
    production: true, 
    API_URL: "${API_BASE_URL}" + "/api/v1.0/task-assignments"
}