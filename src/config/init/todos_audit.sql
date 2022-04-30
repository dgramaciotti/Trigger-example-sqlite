CREATE TABLE todos_audit(
    task TEXT,
    completed BOOLEAN,
    createdAt DATE,
    updatedAt DATE,
    UserId INTEGER,
    auditDate DATE
);