/* Syntax for SQLITE (current date is get using DATETIME('now') */
CREATE TRIGGER audit_todos_update
BEFORE UPDATE ON todos
BEGIN
INSERT INTO todos_audit (task, createdat, updatedat, completed, UserId, auditDate) 
    VALUES (old.task, old.createdat, old.updatedat, old.completed, old.UserId, DATETIME('now'));
END