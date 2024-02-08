


/**
 * find task by title
 * - title
 */
const findTaskByTitle = `
SELECT id, title,  description, status, created_at  FROM tasks WHERE title=$1
`;

/**
 * find task by id
 * - id
 */
const findTaskById = `
SELECT id, title,  description, status, created_at  FROM tasks WHERE id=$1
`;

/**
 * get all tasks
 */
const getAllTasks = `
SELECT * FROM tasks
`;
/**
 * add tasks
 * - title
 * - description
 * - user_id
 *
 */
const addTask = `
INSERT INTO 
  tasks(
    title, 
    description,
    user_id
  ) 
VALUES ($1,$2,$3) RETURNING id, title, description, status, created_at`;

const updateTaskQuery = `
UPDATE tasks SET title=$1, description=$2, updated_at=NOW() WHERE id=$3 RETURNING id, title, description, status, created_at, updated_at`;

const removeTaskQuery = `
DELETE FROM tasks WHERE id=$1`;

module.exports = {
    getAllTasks,
    addTask,
    findTaskByTitle,
    updateTaskQuery,
    removeTaskQuery,
    findTaskById
}